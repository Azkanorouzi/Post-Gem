<script setup lang="ts">
const route = useRoute();
const postStore = usePostStore();

// Extract the slug from the route
const slug = route.params.id;

// Convert the slug to a number (assuming the slug is the post ID)
const postId = Number(slug);

// Fetch the post and comments based on the ID
onMounted(async () => {
  if (!isNaN(postId)) {
    // Ensure the slug is a valid number
    await postStore.fetchPostById(postId);
  } else {
    console.error("Invalid post ID:", slug);
  }
});
</script>

<template>
  <div v-if="postStore.post" class="mx-auto p-6">
    <!-- Post Details -->
    <BaseCard type="bordered" bodyClass="p-3">
      <template #card-title>
        <h1 class="text-3xl font-bold text-primary">
          {{ postStore.post.title }}
        </h1>
      </template>
      <p class="text-gray-700">{{ postStore.post.body }}</p>
      <template #card-actions>
        <NuxtLink
          :to="`/users/${postStore.post.userId}`"
          class="text-blue-500 hover:underline mt-4 block"
        >
          View Creator's Profile
        </NuxtLink>
      </template>
    </BaseCard>

    <!-- Comments Section -->
    <div class="mt-8">
      <h2 class="text-2xl font-bold mb-4">Comments</h2>
      <div v-if="postStore.comments.length > 0" class="space-y-4">
        <BaseCard
          v-for="comment in postStore.comments"
          :key="comment.id"
          type="bordered"
          bodyClass="p-4"
        >
          <template #card-title>
            <h3 class="text-lg font-semibold">{{ comment.name }}</h3>
          </template>
          <p class="text-gray-600">{{ comment.body }}</p>
          <p class="text-sm text-gray-500">{{ comment.email }}</p>
        </BaseCard>
      </div>
      <div v-else class="text-gray-500">No comments yet.</div>
    </div>
  </div>
  <BaseLoading v-else />
</template>
