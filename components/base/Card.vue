<script setup lang="ts">
interface Props {
  type?: "bordered" | "compact" | "normal" | "side";
  bodyClass?: string;
  titleClass?: string;
  actionsClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "normal",
  bodyClass: "",
  titleClass: "",
  actionsClass: "",
});

const cardClass = computed(() => `card w-96 card-${props.type}`);
</script>

<template>
  <section :class="cardClass">
    <slot name="card-image" />
    <div class="card-body" :class="bodyClass">
      <strong
        class="card-title"
        :class="titleClass"
        v-if="$slots['card-title']"
      >
        <slot name="card-title"> Title </slot>
      </strong>
      <slot />
      <div
        class="card-actions"
        :class="actionsClass"
        v-if="$slots['card-actions']"
      >
        <slot name="card-actions" />
      </div>
    </div>
  </section>
</template>
