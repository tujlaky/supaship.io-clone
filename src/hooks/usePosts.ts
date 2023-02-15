import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { PostWithContent } from "../types/post";
import supabase from "../utils/supabase";

async function getPosts() {
  const { data } = await supabase.from('posts').select('*, content:post_contents(*)');

  if (!data) {
    return [];
  }

  return data as PostWithContent[];
}

function usePosts() {
  const [posts, setPosts] = useState<PostWithContent[]>([]);

  useEffect(() => {
    getPosts()
    .then(data => {
      console.log(data);
      data && setPosts(data)
    });

  }, []);

  return [posts];
}

export default usePosts;