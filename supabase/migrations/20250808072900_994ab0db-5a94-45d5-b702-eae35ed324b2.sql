-- Promote provided email to admin role if the user exists
-- Idempotent insert; only adds if not already admin
insert into public.user_roles (user_id, role)
select au.id, 'admin'::user_role
from auth.users au
where lower(au.email) = lower('sebastautiva@gmail.com')
  and not exists (
    select 1 from public.user_roles ur
    where ur.user_id = au.id and ur.role = 'admin'::user_role
  );