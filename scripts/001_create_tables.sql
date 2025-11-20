-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Users table (extends auth.users)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique,
  full_name text,
  avatar_url text,
  bio text,
  wallet_address text,
  total_offset_kg decimal default 0,
  total_spent decimal default 0,
  rank text default 'Seedling',
  streak_days integer default 0,
  last_activity_date date,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- NFT Projects table
create table if not exists public.nft_projects (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  description text not null,
  project_type text not null, -- 'reforestation', 'solar', 'wind', 'mangrove', 'ocean', 'bioenergy'
  region text not null, -- 'malaysia', 'indonesia', 'thailand', etc
  verification_status text default 'verified', -- 'verified', 'pending', 'unverified'
  verifier text, -- 'Verra', 'Gold Standard', 'Bursa Carbon Exchange'
  price_cents integer not null,
  offset_amount_kg decimal not null,
  total_supply integer not null,
  available_supply integer not null,
  image_url text,
  rarity text, -- 'common', 'rare', 'epic', 'legendary'
  impact_metrics jsonb, -- Detailed metrics about the project
  location_coords jsonb, -- {lat, lng}
  verification_docs jsonb, -- Array of document URLs
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- NFTs (Minted tokens)
create table if not exists public.nfts (
  id uuid primary key default uuid_generate_v4(),
  token_id text unique not null,
  project_id uuid references public.nft_projects(id) on delete cascade not null,
  owner_id uuid references public.profiles(id) on delete cascade not null,
  mint_date timestamp with time zone default timezone('utc'::text, now()) not null,
  purchase_price_cents integer not null,
  offset_amount_kg decimal not null,
  metadata jsonb, -- Full NFT metadata
  certificate_url text,
  is_listed_for_sale boolean default false,
  sale_price_cents integer,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Transactions
create table if not exists public.transactions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade not null,
  nft_id uuid references public.nfts(id) on delete set null,
  project_id uuid references public.nft_projects(id) on delete set null,
  type text not null, -- 'purchase', 'resale', 'transfer'
  amount_cents integer not null,
  platform_fee_cents integer not null,
  project_fee_cents integer not null,
  stripe_session_id text,
  stripe_payment_intent text,
  status text default 'pending', -- 'pending', 'completed', 'failed', 'refunded'
  payment_method text, -- 'credit_card', 'touch_n_go', 'fpx', 'grab_pay'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Achievements
create table if not exists public.achievements (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  description text not null,
  icon text not null,
  category text not null, -- 'offset', 'collection', 'social', 'streak'
  requirement jsonb not null, -- {type: 'total_offset', value: 1000}
  reward_points integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- User Achievements (junction table)
create table if not exists public.user_achievements (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade not null,
  achievement_id uuid references public.achievements(id) on delete cascade not null,
  unlocked_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, achievement_id)
);

-- Activities (for activity feed)
create table if not exists public.activities (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade not null,
  type text not null, -- 'purchase', 'achievement', 'milestone', 'trade'
  title text not null,
  description text,
  metadata jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.profiles enable row level security;
alter table public.nft_projects enable row level security;
alter table public.nfts enable row level security;
alter table public.transactions enable row level security;
alter table public.achievements enable row level security;
alter table public.user_achievements enable row level security;
alter table public.activities enable row level security;

-- RLS Policies for profiles
create policy "Public profiles are viewable by everyone"
  on public.profiles for select
  using (true);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- RLS Policies for nft_projects
create policy "NFT projects are viewable by everyone"
  on public.nft_projects for select
  using (true);

-- RLS Policies for nfts
create policy "NFTs are viewable by everyone"
  on public.nfts for select
  using (true);

create policy "Users can insert own NFTs"
  on public.nfts for insert
  with check (auth.uid() = owner_id);

create policy "Users can update own NFTs"
  on public.nfts for update
  using (auth.uid() = owner_id);

-- RLS Policies for transactions
create policy "Users can view own transactions"
  on public.transactions for select
  using (auth.uid() = user_id);

create policy "Users can insert own transactions"
  on public.transactions for insert
  with check (auth.uid() = user_id);

-- RLS Policies for achievements
create policy "Achievements are viewable by everyone"
  on public.achievements for select
  using (true);

-- RLS Policies for user_achievements
create policy "User achievements are viewable by everyone"
  on public.user_achievements for select
  using (true);

create policy "Users can insert own achievements"
  on public.user_achievements for insert
  with check (auth.uid() = user_id);

-- RLS Policies for activities
create policy "Activities are viewable by everyone"
  on public.activities for select
  using (true);

create policy "Users can insert own activities"
  on public.activities for insert
  with check (auth.uid() = user_id);
