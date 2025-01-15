export function useSupabaseAuth(email: string, password: string) {
  const supabase = useSupabaseClient();

  // ========================== Signup function
  const signUpWithPassword = async () => {
    const { error } = await supabase.auth.signUp({
      password: password,
      email: email,
    });

    return { error };
  };

  // ========================== Signout function
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    return { error };
  };

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return { error };
  };

  return { signOut, signUpWithPassword, login };
}
