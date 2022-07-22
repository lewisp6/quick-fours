<script setup>
import Tile from "./Tile.vue";
import { combinedCategories } from "../../state/categories.js";

const categoriesForTiles = combinedCategories
  .map((category) => {
    return category.filter((cluesWithLinks) => !("link" in cluesWithLinks));
  })
  .flat();
</script>

<template>
  <div v-for="clues in categoriesForTiles">
    <Tile :clue="clues.clue" />
  </div>
</template>
