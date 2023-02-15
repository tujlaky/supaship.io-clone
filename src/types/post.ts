import { Database } from "./supabase";

export type Post = Database['public']['Tables']['posts']['Row'];
export type PostContent = Database['public']['Tables']['post_contents']['Row'];

export type PostWithContent = Post & {
  content: PostContent
};