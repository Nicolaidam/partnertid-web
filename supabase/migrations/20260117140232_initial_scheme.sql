
  create table "public"."account" (
    "id" uuid not null,
    "email" text not null,
    "invited_partner_email" text,
    "created_at" timestamp with time zone not null default timezone('utc'::text, now())
      );


alter table "public"."account" enable row level security;


  create table "public"."couple" (
    "id" uuid not null default gen_random_uuid(),
    "partner1_id" uuid not null,
    "partner2_id" uuid,
    "created_at" timestamp with time zone not null default timezone('utc'::text, now()),
    "updated_at" timestamp with time zone not null default timezone('utc'::text, now())
      );


alter table "public"."couple" enable row level security;

CREATE INDEX couple_user1_id_idx ON public.couple USING btree (partner1_id);

CREATE INDEX couple_user2_id_idx ON public.couple USING btree (partner2_id);

CREATE UNIQUE INDEX profiles_pkey ON public.account USING btree (id);

CREATE UNIQUE INDEX relationships_pkey ON public.couple USING btree (id);

alter table "public"."account" add constraint "profiles_pkey" PRIMARY KEY using index "profiles_pkey";

alter table "public"."couple" add constraint "relationships_pkey" PRIMARY KEY using index "relationships_pkey";

alter table "public"."account" add constraint "profiles_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."account" validate constraint "profiles_id_fkey";

alter table "public"."couple" add constraint "couple_partner1_id_fkey" FOREIGN KEY (partner1_id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."couple" validate constraint "couple_partner1_id_fkey";

alter table "public"."couple" add constraint "couple_partner2_id_fkey" FOREIGN KEY (partner2_id) REFERENCES auth.users(id) ON DELETE SET NULL not valid;

alter table "public"."couple" validate constraint "couple_partner2_id_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.auto_link_partner_by_email(user_id uuid, user_email text)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
DECLARE
  pending_couple_id UUID;
BEGIN
  SELECT c.id INTO pending_couple_id
  FROM public.couple c
  JOIN public.account a ON c.partner1_id = a.id
  WHERE LOWER(a.invited_partner_email) = LOWER(user_email)
    AND c.partner2_id IS NULL
    AND c.partner1_id != user_id
  LIMIT 1;

  IF pending_couple_id IS NOT NULL THEN
    UPDATE public.couple
      SET partner2_id = user_id
      WHERE id = pending_couple_id;

    UPDATE public.account
      SET invited_partner_email = NULL
      WHERE id = (
        SELECT partner1_id FROM public.couple WHERE id = pending_couple_id
      );
  END IF;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.check_user_single_relationship()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  IF EXISTS (
    SELECT 1 FROM public.couple
    WHERE id IS DISTINCT FROM NEW.id
      AND (partner1_id = NEW.partner1_id OR partner2_id = NEW.partner1_id)
  ) THEN
    RAISE EXCEPTION 'User % already has a relationship', NEW.partner1_id;
  END IF;

  IF NEW.partner2_id IS NOT NULL AND EXISTS (
    SELECT 1 FROM public.couple
    WHERE id IS DISTINCT FROM NEW.id
      AND (partner1_id = NEW.partner2_id OR partner2_id = NEW.partner2_id)
  ) THEN
    RAISE EXCEPTION 'User % already has a relationship', NEW.partner2_id;
  END IF;

  RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
  INSERT INTO public.account (id, email)
  VALUES (NEW.id, NEW.email);

  PERFORM public.auto_link_partner_by_email(NEW.id, NEW.email);
  RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  NEW.updated_at = timezone('utc', now());
  RETURN NEW;
END;
$function$
;

grant delete on table "public"."account" to "anon";

grant insert on table "public"."account" to "anon";

grant references on table "public"."account" to "anon";

grant select on table "public"."account" to "anon";

grant trigger on table "public"."account" to "anon";

grant truncate on table "public"."account" to "anon";

grant update on table "public"."account" to "anon";

grant delete on table "public"."account" to "authenticated";

grant insert on table "public"."account" to "authenticated";

grant references on table "public"."account" to "authenticated";

grant select on table "public"."account" to "authenticated";

grant trigger on table "public"."account" to "authenticated";

grant truncate on table "public"."account" to "authenticated";

grant update on table "public"."account" to "authenticated";

grant delete on table "public"."account" to "postgres";

grant insert on table "public"."account" to "postgres";

grant references on table "public"."account" to "postgres";

grant select on table "public"."account" to "postgres";

grant trigger on table "public"."account" to "postgres";

grant truncate on table "public"."account" to "postgres";

grant update on table "public"."account" to "postgres";

grant delete on table "public"."account" to "service_role";

grant insert on table "public"."account" to "service_role";

grant references on table "public"."account" to "service_role";

grant select on table "public"."account" to "service_role";

grant trigger on table "public"."account" to "service_role";

grant truncate on table "public"."account" to "service_role";

grant update on table "public"."account" to "service_role";

grant delete on table "public"."couple" to "anon";

grant insert on table "public"."couple" to "anon";

grant references on table "public"."couple" to "anon";

grant select on table "public"."couple" to "anon";

grant trigger on table "public"."couple" to "anon";

grant truncate on table "public"."couple" to "anon";

grant update on table "public"."couple" to "anon";

grant delete on table "public"."couple" to "authenticated";

grant insert on table "public"."couple" to "authenticated";

grant references on table "public"."couple" to "authenticated";

grant select on table "public"."couple" to "authenticated";

grant trigger on table "public"."couple" to "authenticated";

grant truncate on table "public"."couple" to "authenticated";

grant update on table "public"."couple" to "authenticated";

grant delete on table "public"."couple" to "postgres";

grant insert on table "public"."couple" to "postgres";

grant references on table "public"."couple" to "postgres";

grant select on table "public"."couple" to "postgres";

grant trigger on table "public"."couple" to "postgres";

grant truncate on table "public"."couple" to "postgres";

grant update on table "public"."couple" to "postgres";

grant delete on table "public"."couple" to "service_role";

grant insert on table "public"."couple" to "service_role";

grant references on table "public"."couple" to "service_role";

grant select on table "public"."couple" to "service_role";

grant trigger on table "public"."couple" to "service_role";

grant truncate on table "public"."couple" to "service_role";

grant update on table "public"."couple" to "service_role";


  create policy "Users can insert own account"
  on "public"."account"
  as permissive
  for insert
  to public
with check ((auth.uid() = id));



  create policy "Users can insert own profile"
  on "public"."account"
  as permissive
  for insert
  to public
with check ((auth.uid() = id));



  create policy "Users can read own account"
  on "public"."account"
  as permissive
  for select
  to public
using ((auth.uid() = id));



  create policy "Users can read own profile"
  on "public"."account"
  as permissive
  for select
  to public
using ((auth.uid() = id));



  create policy "Users can update own account"
  on "public"."account"
  as permissive
  for update
  to public
using ((auth.uid() = id));



  create policy "Users can update own profile"
  on "public"."account"
  as permissive
  for update
  to public
using ((auth.uid() = id));



  create policy "Users can insert own couple"
  on "public"."couple"
  as permissive
  for insert
  to public
with check ((auth.uid() = partner1_id));



  create policy "Users can insert own relationships"
  on "public"."couple"
  as permissive
  for insert
  to public
with check ((auth.uid() = partner1_id));



  create policy "Users can read own couple"
  on "public"."couple"
  as permissive
  for select
  to public
using (((auth.uid() = partner1_id) OR (auth.uid() = partner2_id)));



  create policy "Users can read own relationships"
  on "public"."couple"
  as permissive
  for select
  to public
using (((auth.uid() = partner1_id) OR (auth.uid() = partner2_id)));



  create policy "Users can update own couple"
  on "public"."couple"
  as permissive
  for update
  to public
using (((auth.uid() = partner1_id) OR (auth.uid() = partner2_id)));



  create policy "Users can update own relationships"
  on "public"."couple"
  as permissive
  for update
  to public
using (((auth.uid() = partner1_id) OR (auth.uid() = partner2_id)));


CREATE TRIGGER enforce_single_relationship_per_user BEFORE INSERT OR UPDATE ON public.couple FOR EACH ROW EXECUTE FUNCTION public.check_user_single_relationship();

CREATE TRIGGER update_relationships_updated_at BEFORE UPDATE ON public.couple FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

