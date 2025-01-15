export const usePostsApi = () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  return {
    getPosts: () => `${baseUrl}/posts`,
    getPostById: (id: number) => `${baseUrl}/posts/${id}`,
    getPostComments: (id: number) => `${baseUrl}/posts/${id}/comments`,
    getUsers: () => `${baseUrl}/users`,
    getUserPosts: (userId: number) => `${baseUrl}/users/${userId}/posts`,
  };
};
