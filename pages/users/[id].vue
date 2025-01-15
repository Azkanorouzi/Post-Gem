<script setup lang="ts">
const route = useRoute();
const userStore = useUserStore();

// Extract the user ID from the route
const userId = Number(route.params.id);

// Fetch the user and their posts based on the ID
onMounted(async () => {
  if (!isNaN(userId)) {
    // Ensure the user ID is a valid number
    await userStore.fetchUserPosts(userId);
    const user = userStore.users.find((user) => user.id === userId);
    if (user) {
      userStore.setSelectedUser(user);
    }
  } else {
    console.error("Invalid user ID:", userId);
  }
});
</script>

<template>
  <div v-if="userStore.selectedUser" class="mx-auto p-6">
    <!-- User Details -->
    <BaseCard type="bordered" bodyClass="p-6">
      <template #card-title>
        <h1 class="text-3xl font-bold text-secondary">
          {{ userStore.selectedUser.name }}
        </h1>
      </template>
      <p class="text-gray-700">{{ userStore.selectedUser.email }}</p>
      <p class="text-gray-700">
        {{ userStore.selectedUser.address.street }},
        {{ userStore.selectedUser.address.city }},
        {{ userStore.selectedUser.address.zipcode }}
      </p>
      <p class="text-gray-700">{{ userStore.selectedUser.phone }}</p>
      <p class="text-gray-700">{{ userStore.selectedUser.website }}</p>
      <p class="text-gray-700">
        Works at {{ userStore.selectedUser.company.name }}
      </p>
    </BaseCard>

    <!-- User's Posts Section -->
    <div class="mt-8">
      <h2 class="text-2xl font-bold mb-4">Posts</h2>
      <div v-if="userStore.userPosts.length > 0" class="space-y-4">
        <BaseCard
          v-for="post in userStore.userPosts"
          :key="post.id"
          type="bordered"
          bodyClass="p-4"
        >
          <template #card-title>
            <h3 class="text-lg font-semibold">{{ post.title }}</h3>
          </template>
          <p class="text-gray-600 line-clamp-3">{{ post.body }}</p>
          <template #card-actions>
            <NuxtLink :to="`/posts/${post.id}`" class="btn btn-secondary mt-4">
              Read More
            </NuxtLink>
          </template>
        </BaseCard>
      </div>
      <div v-else class="text-gray-500">No posts yet.</div>
    </div>
  </div>
  <BaseLoading v-else />
</template>
