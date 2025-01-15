import { defineStore } from "pinia";
import { usePostsApi } from "~/composables/usePostsApi";

// Define types for your data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export const usePostStore = defineStore("post", {
  state: () => ({
    posts: [] as Post[], // Explicitly type as an array of Post objects
    post: null as Post | null, // Explicitly type as Post or null
    comments: [] as Comment[], // Explicitly type as an array of Comment objects
  }),
  actions: {
    async fetchPosts() {
      const { getPosts } = usePostsApi();
      const { data } = await useFetch<Post[]>(getPosts()); // Specify the return type as Post[]
      if (data.value) {
        this.posts = data.value;
      }
    },
    async fetchPostById(id: number) {
      const { getPostById, getPostComments } = usePostsApi();
      const { data: post } = await useFetch<Post>(getPostById(id)); // Specify the return type as Post
      const { data: comments } = await useFetch<Comment[]>(getPostComments(id)); // Specify the return type as Comment[]
      if (post.value) {
        this.post = post.value;
      }
      if (comments.value) {
        this.comments = comments.value;
      }
    },
  },
});
