<template>
  <div
    v-if="isVisible"
    class="alert"
    :class="[`alert-${type}`, { 'animate-fade-out': isClosing }]"
  >
    <div class="flex items-center">
      <Icon v-if="icon" :name="icon" class="w-5 h-5 mr-2" />
      <span><slot /></span>
    </div>
    <button v-if="dismissible" class="btn btn-sm btn-ghost" @click="close">
      <Icon name="mdi:close" class="w-4 h-4" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

interface Props {
  type?: "info" | "success" | "warning" | "error"; // Alert type
  duration?: number; // Duration of fade-out animation in milliseconds
  remainFor?: number; // Time to remain fully visible before fading out (in milliseconds)
  dismissible?: boolean; // Whether the alert can be dismissed manually
  icon?: string; // Optional icon (Nuxt Icon name)
}

const props = withDefaults(defineProps<Props>(), {
  type: "info",
  duration: 300, // Default fade-out duration: 300ms
  remainFor: 2000, // Default time to remain visible: 2 seconds
  dismissible: true,
  icon: "",
});

const isVisible = ref(true);
const isClosing = ref(false);

// Function to close the alert
const close = () => {
  isClosing.value = true;
  setTimeout(() => {
    isVisible.value = false;
  }, props.duration); // Wait for the fade-out animation to complete
};

// Automatically close the alert after the specified `remainFor` time
onMounted(() => {
  if (props.remainFor > 0) {
    setTimeout(() => {
      close();
    }, props.remainFor);
  }
});

// Emit an event when the alert is closed
const emit = defineEmits(["closed"]);
watch(isVisible, (newValue) => {
  if (!newValue) {
    emit("closed");
  }
});
</script>

<style scoped>
.animate-fade-out {
  animation: fadeOut v-bind('props.duration + "ms"') ease-out forwards;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
