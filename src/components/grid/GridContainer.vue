<script setup>
import Tile from "./GridTile.vue";
import { combinedCategories } from "../../state/categories.js";
import { hasMatch, selectTile } from "./gameLogic";
import { shuffle } from "./shuffle";

const categoriesForTiles = combinedCategories
  .map((category) => {
    return category.filter((cluesWithLinks) => !("link" in cluesWithLinks));
  })
  .flat();

shuffle(categoriesForTiles);

let selectedTiles = [];

function onTileClick(clue, category) {
  selectTile(clue, category, selectedTiles);
  console.log(selectedTiles.length);
  if (selectedTiles.length === 4) {
    const result = hasMatch(selectedTiles, category);
    selectedTiles = [];
    console.log(result);
  }
}
</script>

<template>
  <div className="gridContainer">
    <div v-for="clues in categoriesForTiles" :key="clues.clue">
      <Tile
        :onTileClick="onTileClick"
        :clue="clues.clue"
        :category="clues.category"
      />
    </div>
  </div>
</template>

<style scoped>
.gridContainer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
</style>
