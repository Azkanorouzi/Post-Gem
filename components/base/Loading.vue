<script setup lang="ts">
// Define the props interface
interface Props {
  className?: string; // Define the className prop as a string
}

// Define the props using the interface
const props = defineProps<Props>();
</script>

<template>
  <span :class="['loading loading-bars loading-md', props.className]"></span>
</template>
