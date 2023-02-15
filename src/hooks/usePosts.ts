import { useEffect, useState } from "react";
import Post from "../types/post";
import supabase from "../utils/supabase";

function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    supabase.from('posts').select(`
      posts_content(
        title
      )
    `)
      .then(({ data }) => {
        console.log(data);
      });
  }, []);

  return [posts];
}

export default usePosts;