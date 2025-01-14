<script setup lang="ts">
interface Props {
  class: string;
}

const props = withDefaults(defineProps<Props>(), {});

const containerClass = computed(() => `breadcrumbs ${props.class}`);
</script>
<template>
  <div :className="containerClass">
    <ul v-if="$slots.default">
      <slot />
    </ul>
  </div>
</template>
