<template>
  <BaseCard class="bg-base-100 shadow-xl" title-class="text-secondary">
    <template #card-title>
      <Icon name="icon-park-outline:writing-fluently" />
      Sign up
    </template>
    <form @submit.prevent="$emit('submit-form')">
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
        <BaseButton class="btn-secondary" type="primary" @click="handleSignup">
          Signup
        </BaseButton>
      </div>
    </form>
  </BaseCard>
</template>

<script setup>
const email = ref("");
const password = ref("");

function handleSignup() {
  console.log(email.value, password.value);
}
</script>
