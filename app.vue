<template>
  <div
    v-if="authStore.checkAuthLoading"
    class="w-screen h-screen justify-center items-center flex"
  >
    <BaseLoading class="text-9xl text-secondary" />
  </div>
  <div v-else>
    <NavNavbar />
    <main
      class="flex justify-center items-center min-h-screen bg-base-200 flex-col"
    >
      <NuxtPage />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

const authStore = useAuthStore();

onMounted(async () => {
  console.log("App mounted, checking auth...");
  await authStore.checkAuth();
});
</script>
