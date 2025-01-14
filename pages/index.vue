<template>
  <AuthLoginForm />
</template>

<script setup>
const email = ref("");
const password = ref("");

const handleLogin = () => {
  // Handle login logic here
  console.log("Email:", email.value);
  console.log("Password:", password.value);
  alert(`Logged in with email: ${email.value}`);
};
</script>
