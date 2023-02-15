import { Database } from "./supabase";

type Post = Database['public']['Tables']['posts']['Row'];

export default Post;