<script lang="ts" setup>
// Define the props interface
interface Props {
  email: string;
  password: string;
  isLoading: boolean;
  spinnerClass: string;
}

// Define the props using the interface
const props = defineProps<Props>();

// Define the emits
const emit = defineEmits<{
  (event: "update:email", value: string): void;
  (event: "update:password", value: string): void;
  (event: "submit-form"): void;
}>();

// Update email and password using `v-model` binding
const email = computed({
  get: () => props.email,
  set: (value: string) => emit("update:email", value),
});

const password = computed({
  get: () => props.password,
  set: (value: string) => emit("update:password", value),
});

// Handle form submission
const onSubmit = () => {
  emit("submit-form");
};
</script>

<template>
  <BaseCard class="bg-base-100 shadow-xl" title-class="text-secondary">
    <template #card-title>
      <slot name="form-title" />
    </template>
    <form @submit.prevent="onSubmit">
      <!-- Email Field -->
      <div class="form-control">
        <label class="label" for="email">
          <span class="label-text">Email</span>
        </label>
        <BaseInput
          id="email"
          v-model="email"
          type="email"
          placeholder="Enter your email"
          class="input-bordered"
          :required="true"
        />
      </div>

      <!-- Password Field -->
      <div class="form-control">
        <label class="label" for="password">
          <span class="label-text">Password</span>
        </label>
        <BaseInput
          id="password"
          v-model="password"
          type="password"
          placeholder="Enter your password"
          class="input-bordered"
          :required="true"
        />
      </div>

      <!-- Submit Button -->
      <div class="form-control mt-6">
        <BaseButton
          class="btn-secondary"
          type="primary"
          @click="onSubmit"
          :disabled="isLoading"
        >
          <BaseLoading v-if="isLoading" :class="spinnerClass" />
          <slot v-if="!isLoading" name="submit-text"> Signup </slot>
        </BaseButton>
      </div>
    </form>
  </BaseCard>
</template>
