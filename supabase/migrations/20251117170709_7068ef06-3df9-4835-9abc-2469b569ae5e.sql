-- Create app_role enum for role-based access control
create type public.app_role as enum ('admin', 'pro_user', 'user');

-- Create user_roles table for role management
create table public.user_roles (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id) on delete cascade not null,
    role app_role not null,
    created_at timestamp with time zone default now(),
    unique (user_id, role)
);

alter table public.user_roles enable row level security;

-- Security definer function to check user roles
create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role = _role
  )
$$;

-- Create pro_users table for additional pro user information
create table public.pro_users (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id) on delete cascade not null unique,
    organization text not null,
    contact_role text not null,
    account_manager text,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
);

alter table public.pro_users enable row level security;

-- RLS policies for pro_users
create policy "Users can view own pro data"
on public.pro_users
for select
to authenticated
using (auth.uid() = user_id);

create policy "Admins can manage all pro users"
on public.pro_users
for all
to authenticated
using (public.has_role(auth.uid(), 'admin'));

-- Create orders table for dashboard
create table public.orders (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id) on delete cascade not null,
    order_number text not null unique,
    total_amount numeric not null,
    status text not null check (status in ('pending', 'processing', 'shipped', 'delivered', 'cancelled')),
    items jsonb not null,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
);

alter table public.orders enable row level security;

create policy "Users can view own orders"
on public.orders
for select
to authenticated
using (auth.uid() = user_id);

-- Create invoices table
create table public.invoices (
    id uuid primary key default gen_random_uuid(),
    order_id uuid references public.orders(id) on delete cascade not null,
    invoice_number text not null unique,
    pdf_url text,
    created_at timestamp with time zone default now()
);

alter table public.invoices enable row level security;

create policy "Users can view own invoices"
on public.invoices
for select
to authenticated
using (
    exists (
        select 1 from public.orders
        where orders.id = invoices.order_id
        and orders.user_id = auth.uid()
    )
);

-- Trigger to update updated_at timestamp
create or replace function public.update_updated_at_column()
returns trigger
language plpgsql
as $$
begin
    new.updated_at = now();
    return new;
end;
$$;

create trigger update_pro_users_updated_at
before update on public.pro_users
for each row
execute function public.update_updated_at_column();

create trigger update_orders_updated_at
before update on public.orders
for each row
execute function public.update_updated_at_column();