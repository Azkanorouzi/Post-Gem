import { defineStore } from "pinia";
import { useUsersApi } from "~/composables/useUsersApi";

// Define types for your data
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [] as User[], // Array of User objects
    userPosts: [] as Post[], // Array of Post objects for a specific user
    selectedUser: null as User | null, // Currently selected user
  }),
  actions: {
    // Fetch all users
    async fetchUsers() {
      const { getUsers } = useUsersApi();
      const { data } = await useFetch<User[]>(getUsers()); // Fetch users
      if (data.value) {
        this.users = data.value;
      }
    },

    // Fetch posts by a specific user
    async fetchUserPosts(userId: number) {
      const { getUserPosts } = useUsersApi();
      const { data } = await useFetch<Post[]>(getUserPosts(userId)); // Fetch posts for the user
      if (data.value) {
        this.userPosts = data.value;
      }
    },

    // Set the selected user
    setSelectedUser(user: User) {
      this.selectedUser = user;
    },
  },
});
