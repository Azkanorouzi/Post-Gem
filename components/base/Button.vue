<script setup lang="ts">
interface Props {
  class?: string; // Optional class prop
  type?:
    | "primary"
    | "secondary"
    | "neutral"
    | "accent"
    | "ghost"
    | "link"
    | "info"
    | "success"
    | "warning"
    | "error"; // Button type
  size?: "sm" | "lg" | "md"; // Button size
  loading?: boolean; // Loading state
  disabled?: boolean; // Disabled state
}

const props = withDefaults(defineProps<Props>(), {
  type: "primary",
  size: "md",
  disabled: false,
  loading: false,
  class: "",
});

// Compute the button classes dynamically
const computedClass = computed(() => {
  const baseClass = `btn btn-${props.type} btn-${props.size}`;
  return `${baseClass} ${props.class}`;
});
</script>

<template>
  <button
    :class="computedClass"
    :disabled="props.disabled || props.loading"
    type="button"
  >
    <!-- Loading state -->
    <span v-if="loading" class="loading loading-spinner"></span>
    <!-- Slot for button content -->
    <slot>Click</slot>
  </button>
</template>
