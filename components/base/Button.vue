<script setup lang="ts">
interface Props {
  class: string;
  type:
    | "primary"
    | "secondary"
    | "neutral"
    | "accent"
    | "ghost"
    | "link"
    | "info"
    | "success"
    | "warning"
    | "error";
  size: "sm" | "lg" | "md";
  loading: false; // Not loading by default
  disabled: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: "primary",
  size: "md",
  disabled: false,
  loading: false,
});

const computedClass = computed(() => `btn btn-${props.type} ${props.class}`);
</script>

<template>
  <button :class="computedClass" :disabled="disabled">
    <!-- Loading state -->
    <span v-if="loading" class="loading loading-spinner"></span>
    <!-- Slot for button content -->
    <slot> click </slot>
  </button>
</template>
