export const useUsersApi = () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  return {
    getUsers: () => `${baseUrl}/users`,
    getUserPosts: (userId: number) => `${baseUrl}/users/${userId}/posts`,
  };
};
