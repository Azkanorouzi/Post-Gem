<script lang="ts" setup>
const authStore = useAuthStore();
function handleLogout() {
  authStore.logout();
}
</script>
<template>
  <BaseButton
    @click="handleLogout()"
    type="error"
    class="btn-base-100 text-error"
    v-if="authStore.isLoggedIn"
  >
    <span class="loading loading-spinner" v-if="authStore.logoutLoading"></span>
    <Icon name="mdi:logout" class="w-5 h-5" />
    Logout
  </BaseButton>
</template>
