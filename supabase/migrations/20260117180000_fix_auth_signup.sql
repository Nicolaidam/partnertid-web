create or replace function public.auto_link_partner_by_email(user_id uuid, user_email text)
returns void
language plpgsql
security definer
as $$
declare
  pending_couple_id uuid;
begin
  select c.id into pending_couple_id
  from public.couple c
  join public.account a on c.partner1_id = a.id
  where lower(a.invited_partner_email) = lower(user_email)
    and c.partner2_id is null
    and c.partner1_id != user_id
  limit 1;

  if pending_couple_id is not null then
    update public.couple
      set partner2_id = user_id
      where id = pending_couple_id;

    update public.account
      set invited_partner_email = null
      where id = (
        select partner1_id from public.couple where id = pending_couple_id
      );
  end if;
end;
$$;

create or replace function public.check_user_single_relationship()
returns trigger
language plpgsql
as $$
begin
  if exists (
    select 1 from public.couple
    where id is distinct from new.id
      and (partner1_id = new.partner1_id or partner2_id = new.partner1_id)
  ) then
    raise exception 'User % already has a relationship', new.partner1_id;
  end if;

  if new.partner2_id is not null and exists (
    select 1 from public.couple
    where id is distinct from new.id
      and (partner1_id = new.partner2_id or partner2_id = new.partner2_id)
  ) then
    raise exception 'User % already has a relationship', new.partner2_id;
  end if;

  return new;
end;
$$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
as $$
begin
  insert into public.account (id, email)
  values (new.id, new.email);

  perform public.auto_link_partner_by_email(new.id, new.email);
  return new;
end;
$$;
