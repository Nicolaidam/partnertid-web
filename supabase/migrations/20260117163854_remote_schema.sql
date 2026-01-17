drop extension if exists "pg_net";

drop trigger if exists "enforce_single_relationship_per_user" on "public"."couple";

drop trigger if exists "update_relationships_updated_at" on "public"."couple";

drop policy "Users can insert own account" on "public"."account";

drop policy "Users can insert own profile" on "public"."account";

drop policy "Users can read own account" on "public"."account";

drop policy "Users can read own profile" on "public"."account";

drop policy "Users can update own account" on "public"."account";

drop policy "Users can update own profile" on "public"."account";

drop policy "Users can insert own couple" on "public"."couple";

drop policy "Users can insert own relationships" on "public"."couple";

drop policy "Users can read own couple" on "public"."couple";

drop policy "Users can read own relationships" on "public"."couple";

drop policy "Users can update own couple" on "public"."couple";

drop policy "Users can update own relationships" on "public"."couple";

revoke delete on table "public"."account" from "anon";

revoke insert on table "public"."account" from "anon";

revoke references on table "public"."account" from "anon";

revoke select on table "public"."account" from "anon";

revoke trigger on table "public"."account" from "anon";

revoke truncate on table "public"."account" from "anon";

revoke update on table "public"."account" from "anon";

revoke delete on table "public"."account" from "authenticated";

revoke insert on table "public"."account" from "authenticated";

revoke references on table "public"."account" from "authenticated";

revoke select on table "public"."account" from "authenticated";

revoke trigger on table "public"."account" from "authenticated";

revoke truncate on table "public"."account" from "authenticated";

revoke update on table "public"."account" from "authenticated";

revoke delete on table "public"."account" from "service_role";

revoke insert on table "public"."account" from "service_role";

revoke references on table "public"."account" from "service_role";

revoke select on table "public"."account" from "service_role";

revoke trigger on table "public"."account" from "service_role";

revoke truncate on table "public"."account" from "service_role";

revoke update on table "public"."account" from "service_role";

revoke delete on table "public"."couple" from "anon";

revoke insert on table "public"."couple" from "anon";

revoke references on table "public"."couple" from "anon";

revoke select on table "public"."couple" from "anon";

revoke trigger on table "public"."couple" from "anon";

revoke truncate on table "public"."couple" from "anon";

revoke update on table "public"."couple" from "anon";

revoke delete on table "public"."couple" from "authenticated";

revoke insert on table "public"."couple" from "authenticated";

revoke references on table "public"."couple" from "authenticated";

revoke select on table "public"."couple" from "authenticated";

revoke trigger on table "public"."couple" from "authenticated";

revoke truncate on table "public"."couple" from "authenticated";

revoke update on table "public"."couple" from "authenticated";

revoke delete on table "public"."couple" from "service_role";

revoke insert on table "public"."couple" from "service_role";

revoke references on table "public"."couple" from "service_role";

revoke select on table "public"."couple" from "service_role";

revoke trigger on table "public"."couple" from "service_role";

revoke truncate on table "public"."couple" from "service_role";

revoke update on table "public"."couple" from "service_role";

alter table "public"."account" drop constraint "profiles_id_fkey";

alter table "public"."couple" drop constraint "couple_partner1_id_fkey";

alter table "public"."couple" drop constraint "couple_partner2_id_fkey";

drop trigger if exists "on_auth_user_created" on "auth"."users";

drop function if exists "public"."handle_new_user"();

drop function if exists "public"."auto_link_partner_by_email"(user_id uuid, user_email text);

drop function if exists "public"."check_user_single_relationship"();

drop function if exists "public"."update_updated_at_column"();

alter table "public"."account" drop constraint "profiles_pkey";

alter table "public"."couple" drop constraint "relationships_pkey";

drop index if exists "public"."couple_user1_id_idx";

drop index if exists "public"."couple_user2_id_idx";

drop index if exists "public"."profiles_pkey";

drop index if exists "public"."relationships_pkey";

drop table "public"."account";

drop table "public"."couple";
