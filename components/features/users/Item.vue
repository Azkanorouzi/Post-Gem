<script setup lang="ts">
interface Props {
  user: {
    id: number;
    name: string;
    email: string;
    address: {
      street: string;
      city: string;
      zipcode: string;
    };
  };
}

const { user } = defineProps<Props>();
</script>

<template>
  <BaseCard
    type="bordered"
    bodyClass="p-4 min-h-[250px] max-h-[250px]"
    class="bg-base-100 border border-secondary"
  >
    <template #card-title>
      <div class="flex items-center gap-4 text-secondary">
        <div>
          <Icon name="material-symbols:person" />
        </div>
        <h2 class="text-xl font-bold">{{ user.name }}</h2>
      </div>
    </template>
    <p class="text-gray-600">{{ user.email }}</p>
    <p class="text-gray-600 line-clamp-2">
      {{ user.address.street }}, {{ user.address.city }},
      {{ user.address.zipcode }}
    </p>
    <template #card-actions>
      <NuxtLink :to="`/users/${user.id}`" class="btn btn-secondary mt-4">
        View Profile
      </NuxtLink>
    </template>
  </BaseCard>
</template>
