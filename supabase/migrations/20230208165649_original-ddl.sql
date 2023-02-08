create extension ltree;

CREATE TABLE user_profiles (
  user_id uuid primary key references auth.users (id) not null,
  username text unique not null
  CONSTRAINT proper_username CHECK (username ~* '^[a-zA-Z0-9_]+$')
  CONSTRAINT username_length CHECK (char_length(username) > 3 and char_length(username) < 15)
);

CREATE TABLE posts (
  id bigint generated always as identity primary key,
  user_id uuid references auth.users (id) not null,
  created_at timestamp with time zone default now() not null,
  path ltree not null
);
