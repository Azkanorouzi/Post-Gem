<script setup>
const email = ref("");
const password = ref("");

const authStore = useAuthStore();
</script>
<template>
  <AuthFailAlert v-if="authStore.loginError">
    {{ authStore.loginError }}
  </AuthFailAlert>
  <BaseAuthForm
    :is-loading="authStore.loginLoading"
    v-model:email="email"
    v-model:password="password"
    @submit-form="authStore.login(email, password)"
    spinner-class="text-primary"
  >
    <template #form-title>
      <Icon name="line-md:login" class="text-primary" />
      <span class="text-primary"> Login</span>
    </template>

    <template #submit-text> Login </template>
  </BaseAuthForm>
</template>
