<script setup>
const email = ref("");
const password = ref("");

const authStore = useAuthStore();
</script>
<template>
  <AuthFailAlert v-if="authStore.signUpError">
    {{ authStore.signUpError }}
  </AuthFailAlert>
  <BaseAuthForm
    :is-loading="authStore.signUpLoading"
    v-model:email="email"
    v-model:password="password"
    @submit-form="authStore.signUp(email, password)"
    spinner-class="text-secondary"
  >
    <template #form-title>
      <Icon name="icon-park-outline:writing-fluently" />
      Sign up
    </template>

    <template #submit-text> Sign up </template>
  </BaseAuthForm>
</template>
