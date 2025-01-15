import { defineStore } from "pinia";
import { useSupabaseClient } from "#imports"; // Assuming you're using Nuxt 3 with Supabase

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: false, // Initial state: user is not logged in

    // Loading states for each action
    loginLoading: false,
    signUpLoading: false,
    logoutLoading: false,
    checkAuthLoading: false,

    // Error states for each action
    loginError: null as string | null,
    signUpError: null as string | null,
    logoutError: null as string | null,
    checkAuthError: null as string | null,
  }),

  actions: {
    // Reset all error states
    resetErrors() {
      this.loginError = null;
      this.signUpError = null;
      this.logoutError = null;
      this.checkAuthError = null;
    },

    // Update state after successful login
    async login(email: string, password: string) {
      this.loginLoading = true; // Start loading for login
      this.loginError = null; // Reset login error

      try {
        const supabase = useSupabaseClient();
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          this.loginError = error.message; // Set login error message
          throw error; // Throw error to handle it in the component
        } else {
          this.isLoggedIn = true; // Update state to logged in
          navigateTo("/posts"); // Redirect to /posts after successful login
        }
      } catch (error) {
        console.error("Login failed:", error);
        throw error; // Re-throw error for component handling
      } finally {
        this.loginLoading = false; // End loading for login
      }
    },

    // Update state after successful signup
    async signUp(email: string, password: string) {
      this.signUpLoading = true; // Start loading for signup
      this.signUpError = null; // Reset signup error

      try {
        const supabase = useSupabaseClient();
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) {
          this.signUpError = error.message; // Set signup error message
          throw error; // Throw error to handle it in the component
        } else {
          this.isLoggedIn = true; // Update state to logged in
          navigateTo("/posts"); // Redirect to /posts after successful login
        }
      } catch (error) {
        console.error("Signup failed:", error);
        throw error; // Re-throw error for component handling
      } finally {
        this.signUpLoading = false; // End loading for signup
      }
    },

    // Update state after successful logout
    async logout() {
      this.logoutLoading = true; // Start loading for logout
      this.logoutError = null; // Reset logout error

      try {
        const supabase = useSupabaseClient();
        const { error } = await supabase.auth.signOut();

        if (error) {
          this.logoutError = error.message; // Set logout error message
          throw error; // Throw error to handle it in the component
        } else {
          this.isLoggedIn = false; // Update state to logged out

          navigateTo("/login"); // Redirect to /posts after successful login
        }
      } catch (error) {
        console.error("Logout failed:", error);
        throw error; // Re-throw error for component handling
      } finally {
        this.logoutLoading = false; // End loading for logout
      }
    },

    // Check if the user is authenticated
    async checkAuth() {
      this.checkAuthLoading = true; // Start loading for checkAuth
      this.checkAuthError = null; // Reset checkAuth error

      try {
        const supabase = useSupabaseClient();
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (error) {
          this.checkAuthError = error.message; // Set checkAuth error message
          this.isLoggedIn = false; // Update state to not logged in
        } else {
          this.isLoggedIn = !!user; // Update state based on user existence
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        this.isLoggedIn = false; // Update state to not logged in
        throw error; // Re-throw error for component handling
      } finally {
        this.checkAuthLoading = false; // End loading for checkAuth
      }
    },
  },
});
