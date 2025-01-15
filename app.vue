<script setup lang="ts">
import Navbar from "./components/features/navigation/Navbar.vue";
</script>

<template>
  <Navbar />
  <main
    class="flex justify-center items-center min-h-screen bg-base-200 flex-col"
  >
    <NuxtPage />
  </main>
</template>
