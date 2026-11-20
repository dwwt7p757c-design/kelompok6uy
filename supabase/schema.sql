create table if not exists public.products (
 id uuid primary key default gen_random_uuid(), name text not null, slug text unique not null,
 description text default '', price numeric not null check (price >= 0), discount_price numeric,
 images text[] default '{}', category text default 'Lainnya', stock integer not null default 0,
 sizes text[] default '{}', colors text[] default '{}', featured boolean default false,
 new_arrival boolean default false, created_at timestamptz default now()
);
create table if not exists public.orders (
 id uuid primary key default gen_random_uuid(), customer_name text not null, customer_phone text not null,
 delivery_address text not null, notes text, items jsonb not null, subtotal numeric not null,
 status text not null default 'new', created_at timestamptz default now()
);
create table if not exists public.admin_users (user_id uuid primary key references auth.users(id) on delete cascade);
alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.admin_users enable row level security;
create policy "Public product read" on public.products for select using (true);
create policy "Admin product write" on public.products for all using (
 exists(select 1 from public.admin_users a where a.user_id=auth.uid())
) with check (exists(select 1 from public.admin_users a where a.user_id=auth.uid()));
create policy "Admin order read" on public.orders for select using (
 exists(select 1 from public.admin_users a where a.user_id=auth.uid())
);
create policy "Admin order update" on public.orders for update using (
 exists(select 1 from public.admin_users a where a.user_id=auth.uid())
);
insert into storage.buckets (id,name,public) values ('product-images','product-images',true) on conflict do nothing;
