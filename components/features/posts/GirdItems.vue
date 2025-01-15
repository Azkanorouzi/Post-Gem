<script setup lang="ts">
const postStore = usePostStore();

// Fetch posts when the component is mounted
onMounted(async () => {
  await postStore.fetchPosts();
});
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-6 p-6">
    <div
      v-for="post in postStore.posts"
      :key="post.id"
      class="transition-transform hover:scale-105"
    >
      <PostItem :post="post" />
    </div>
  </div>
</template>
