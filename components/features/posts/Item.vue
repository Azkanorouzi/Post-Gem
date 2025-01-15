<script setup lang="ts">
interface Props {
  post: {
    id: number;
    title: string;
    body: string;
  };
}

const { post } = defineProps<Props>();
</script>

<template>
  <BaseCard
    type="bordered"
    bodyClass="p-4 min-h-[250px] max-h-[250px]"
    class="bg-base-100 border border-primary"
  >
    <template #card-title>
      <div class="flex items-center gap-4 text-primary">
        <div>
          <Icon name="material-symbols:post" />
        </div>
        <h2 class="text-xl font-bold">{{ post.title }}</h2>
      </div>
    </template>
    <p class="text-gray-600 line-clamp-3">{{ post.body }}</p>
    <template #card-actions>
      <NuxtLink :to="`/posts/${post.id}`" class="btn btn-primary mt-4">
        Read More
      </NuxtLink>
    </template>
  </BaseCard>
</template>
