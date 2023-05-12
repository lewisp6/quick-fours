<script setup>
import { RouterView } from "vue-router";

function toggleTheme() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    console.log('f');
  } else {
    document.body.classList.add("dark");
    console.log('fd');
  }
}
</script>

<template>
  <input
    @change="toggleTheme"
    id="checkbox"
    type="checkbox"
    class="switch-checkbox"
  />
  <label for="checkbox" class="switch-label">
    Less colour
    <div
      class="switch-toggle"
      :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
    ></div>
  </label>
  <RouterView />
</template>
