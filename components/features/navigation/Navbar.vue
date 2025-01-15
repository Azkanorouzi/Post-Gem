<script setup lang="ts">
import { ref } from "vue";
// Use the auth store
const authStore = useAuthStore();

// Hamburger menu state
const isMenuOpen = ref(false);

// Get the current route
const route = useRoute();

// Toggle mobile menu
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
<template>
  <nav class="navbar bg-base-100 shadow-lg px-4 sm:px-8 fixed z-50">
    <!-- Left Section: Hamburger Menu (Mobile Only) -->
    <div class="flex-1 flex items-center sm:hidden">
      <button @click="toggleMenu" class="btn btn-ghost">
        <Icon name="mdi:menu" class="w-6 h-6" />
      </button>
    </div>

    <!-- Center Section: Logo -->
    <div class="flex-1 flex justify-center sm:justify-start">
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">
        <Icon name="mdi:diamond" class="w-5 h-5" />
        Post-Gem
      </NuxtLink>
    </div>

    <!-- Right Section: Desktop Menu Items -->
    <div class="flex-1 hidden sm:flex items-center justify-end gap-4">
      <!-- Posts Link -->
      <NuxtLink
        v-if="authStore.isLoggedIn"
        to="/posts"
        :class="[
          'btn btn-ghost',
          route.path === '/posts' ? 'text-primary' : 'text-base-content',
        ]"
      >
        <Icon name="mdi:post" class="w-5 h-5" />
        Posts
      </NuxtLink>
      <button
        v-else
        class="btn btn-ghost opacity-50 cursor-not-allowed"
        disabled
      >
        <Icon name="mdi:lock" class="w-5 h-5" />
        Posts
      </button>

      <!-- Users Link -->
      <NuxtLink
        v-if="authStore.isLoggedIn"
        to="/users"
        :class="[
          'btn btn-ghost',
          route.path === '/users' ? 'text-primary' : 'text-base-content',
        ]"
      >
        <Icon name="mdi:account-group" class="w-5 h-5" />
        Users
      </NuxtLink>
      <button
        v-else
        class="btn btn-ghost opacity-50 cursor-not-allowed"
        disabled
      >
        <Icon name="mdi:lock" class="w-5 h-5" />
        Users
      </button>

      <!-- Theme Dropdown -->
      <ThemeSwitchColors />

      <!-- Logout Button -->
      <AuthLogoutButton v-if="authStore.isLoggedIn" />

      <!-- Login Link -->
      <NuxtLink
        v-if="!authStore.isLoggedIn"
        to="/login"
        :class="[
          'btn btn-ghost',
          route.path === '/login' ? 'text-primary' : 'text-base-content',
        ]"
      >
        <Icon name="mdi:login" class="w-5 h-5" />
        Login
      </NuxtLink>

      <!-- Signup Link -->
      <NuxtLink
        v-if="!authStore.isLoggedIn"
        to="/signup"
        :class="[
          'btn btn-ghost',
          route.path === '/signup' ? 'text-primary' : 'text-base-content',
        ]"
      >
        <Icon name="mdi:account-plus" class="w-5 h-5" />
        Signup
      </NuxtLink>
    </div>

    <!-- Mobile Menu (Hidden by Default) -->
    <div
      v-if="isMenuOpen"
      class="sm:hidden absolute top-16 left-0 w-full bg-base-100 shadow-lg"
    >
      <div class="flex flex-col gap-2 p-4">
        <!-- Posts Link -->
        <NuxtLink
          v-if="authStore.isLoggedIn"
          to="/posts"
          :class="[
            'btn btn-ghost justify-start',
            route.path === '/posts' ? 'text-primary' : 'text-base-content',
          ]"
        >
          <Icon name="mdi:post" class="w-5 h-5" />
          Posts
        </NuxtLink>
        <button
          v-else
          class="btn btn-ghost justify-start opacity-50 cursor-not-allowed"
          disabled
        >
          <Icon name="mdi:lock" class="w-5 h-5" />
          Posts
        </button>

        <!-- Users Link -->
        <NuxtLink
          v-if="authStore.isLoggedIn"
          to="/users"
          :class="[
            'btn btn-ghost justify-start',
            route.path === '/users' ? 'text-primary' : 'text-base-content',
          ]"
        >
          <Icon name="mdi:account-group" class="w-5 h-5" />
          Users
        </NuxtLink>
        <button
          v-else
          class="btn btn-ghost justify-start opacity-50 cursor-not-allowed"
          disabled
        >
          <Icon name="mdi:lock" class="w-5 h-5" />
          Users
        </button>

        <!-- Theme Dropdown -->
        <ClientOnly>
          <ThemeSwitchColors />
        </ClientOnly>

        <!-- Logout Button -->
        <AuthLogoutButton v-if="authStore.isLoggedIn" />

        <!-- Login Link -->
        <NuxtLink
          v-if="!authStore.isLoggedIn"
          to="/login"
          :class="[
            'btn btn-ghost justify-start',
            route.path === '/login' ? 'text-primary' : 'text-base-content',
          ]"
        >
          <Icon name="mdi:login" class="w-5 h-5" />
          Login
        </NuxtLink>

        <!-- Signup Link -->
        <NuxtLink
          v-if="!authStore.isLoggedIn"
          to="/signup"
          :class="[
            'btn btn-ghost justify-start',
            route.path === '/signup' ? 'text-primary' : 'text-base-content',
          ]"
        >
          <Icon name="mdi:account-plus" class="w-5 h-5" />
          Signup
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
