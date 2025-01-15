<script setup lang="ts">
const userStore = useUserStore();

// Fetch users when the component is mounted
onMounted(async () => {
  await userStore.fetchUsers();
});
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-6 p-6">
    <div
      v-for="user in userStore.users"
      :key="user.id"
      class="transition-transform hover:scale-105"
    >
      <UserItem :user="user" />
    </div>
  </div>
</template>
