<script setup>
import { RouterView } from "vue-router";

function toggleTheme() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
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
    <div class="switch-toggle"></div>
  </label>
  <RouterView />
</template>
