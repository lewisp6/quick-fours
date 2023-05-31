<script setup>
import Grid from "../components/grid/GridContainer.vue";
import { categoryStore } from "../state/categories.js";
</script>

<template>
  <Grid :categories="categoryStore.categories" />
</template>
