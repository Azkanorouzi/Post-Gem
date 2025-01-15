<template>
  <div class="dropdown dropdown-end z-50">
    <label tabindex="0" class="btn btn-ghost">
      <Icon name="mdi:palette" class="w-5 h-5" />
      Themes
    </label>
    <ul
      tabindex="0"
      class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 max-h-[700px] absolute"
    >
      <li v-for="theme in themes" :key="theme">
        <a @click="changeTheme(theme)">{{ theme }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useLocalStorage } from "~/composables/useLocalStorage"; // Adjust the path as needed

// List of available Daisy UI themes
const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

// Use the useLocalStorage composable to manage the theme
const selectedTheme = useLocalStorage<string>("theme", "light");

// Function to change the theme
function changeTheme(theme: string) {
  selectedTheme.value = theme; // Update the theme in localStorage
  applyTheme(theme); // Apply the theme to the document
}

// Function to apply the theme to the document
function applyTheme(theme: string) {
  document.documentElement.setAttribute("data-theme", theme);
  document.body.setAttribute("class", theme);
}

// On component mount, apply the saved theme from localStorage
onMounted(() => {
  applyTheme(selectedTheme.value); // Apply the saved theme
});
</script>
