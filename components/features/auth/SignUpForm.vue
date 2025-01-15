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
    spinner-class="text-secondary"
  >
    <template #form-title>
      <Icon name="icon-park-outline:writing-fluently" />
      Sign up
    </template>

    <template #submit-text> Sign up </template>
  </BaseAuthForm>
</template>
