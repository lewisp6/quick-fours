<script setup>
import { reactive } from "vue";
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
let matchedCategories = reactive([]);

function onTileClick(clue, category) {
  selectTile(clue, category, selectedTiles);

  if (selectedTiles.length === 4) {
    const result = hasMatch(selectedTiles, category);
    if (result) {
      matchedCategories.push(category);
    }
    selectedTiles = [];
  }
}

function getMatchedClass(category) {
  return `matched-${matchedCategories.indexOf(category) + 1}`;
}
</script>

<template>
  <div className="gridContainer">
    <div
      v-for="clues in categoriesForTiles"
      :key="clues.clue"
      :class="
        matchedCategories.includes(clues.category)
          ? getMatchedClass(clues.category)
          : ''
      "
    >
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

.matched-1 {
  grid-row-start: 1;
  transition: all ease-in-out 0.25s;
  animation: shake 0.5s;
  background-color: red;
}

.matched-2 {
  grid-row-start: 2;
  transition: 2s;
  background-color: rgb(111, 45, 224);
}

.matched-3 {
  grid-row-start: 3;
  transition: 2s;
  background-color: rgb(224, 167, 227);
}

.matched-4 {
  grid-row-start: 4;
  transition: 2s;
  background-color: rgb(215, 229, 221);
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
