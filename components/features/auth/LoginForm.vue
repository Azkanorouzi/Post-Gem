<script setup>
const email = ref("");
const password = ref("");

function submitForm() {}
</script>
<template>
  <BaseAuthForm
    :is-loading="true"
    v-model:email="email"
    v-model:password="password"
    @submit-form="submitForm"
    spinner-class="text-primary"
  >
    <template #form-title>
      <Icon name="line-md:login" class="text-primary" />
      <span class="text-primary"> Login</span>
    </template>

    <template #submit-text> login up </template>
  </BaseAuthForm>
</template>
