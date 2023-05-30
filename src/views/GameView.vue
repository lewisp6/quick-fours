<script setup>
import Grid from "../components/grid/GridContainer.vue";
import GameOver from "../components/gameOver/gameOver.vue";
import { categoryStore } from "../state/categories.js";
import { scoreStore } from "../state/score";
</script>

<template>
  <Grid v-if="scoreStore.guess < 4" :categories="categoryStore.categories" />
  <GameOver
    v-if="scoreStore.guess === 4"
    :win="scoreStore.score === 4"
    :categories="categoryStore.categories"
  />
</template>
