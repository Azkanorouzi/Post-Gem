<script setup lang="ts">
interface Props {
  type: "bordered" | "compact" | "normal" | "side";
  bodyClass: string;
  titleClass: string;
  actionsClass: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "normal",
});

const cardClass = computed(() => `card w-96 card-${props.type}`);
</script>

<template>
  <section :class="cardClass">
    <slot name="card-image" />
    <div class="card-body" :class="bodyClass">
      <strong class="card-title" :class="titleClass">
        <slot name="title"> Title </slot>
      </strong>
      <slot />
      <div class="card-actions" :class="actionsClass">
        <slot name="card-actions" />
      </div>
    </div>
  </section>
</template>
