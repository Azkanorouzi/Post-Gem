// ========================== supabase have route guard by default, but since it was mentioned in the pdf, this is an example of how it can be implemented.

// middleware/auth.global.ts
// export default defineNuxtRouteMiddleware(async (to, from) => {
//   const { $supabase } = useNuxtApp();
//   const { data } = await $supabase.auth.getSession();
//
//   // Redirect to login if the user is not authenticated
//   if (!data.session && to.path !== "/login") {
//     return navigateTo("/login");
//   }
// });
