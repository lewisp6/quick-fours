<script setup>
import { reactive } from "vue";
import Tile from "./GridTile.vue";
import { combinedCategories } from "../../state/categories.js";
import { hasMatch, selectTile, getCategoriesForTiles } from "./gameLogic";

const categoriesForTiles = getCategoriesForTiles(combinedCategories);

let selectedTiles = [];
let matchedCategories = reactive([]);

function onTileClick(clue, category) {
  selectTile(clue, category, selectedTiles);

  if (selectedTiles.length === 4) {
    console.log(hasMatch(selectedTiles, category));
    if (hasMatch(selectedTiles, category)) {
      matchedCategories.push(category);
    }
    selectedTiles = [];
  }
}

function getMatchedClass(category) {
  return `matched no-${matchedCategories.indexOf(category) + 1}`;
}

function hasCategoryBeenSovled(category) {
  return matchedCategories.includes(category);
}
</script>

<template>
  <div className="gridContainer">
    <div className="grid unsovled">
      <Tile
        v-for="clues in categoriesForTiles"
        :key="clues.clue"
        :class="
          hasCategoryBeenSovled(clues.category)
            ? getMatchedClass(clues.category)
            : ''
        "
        :onTileClick="onTileClick"
        :clue="clues.clue"
        :category="clues.category"
        :solved="hasCategoryBeenSovled(clues.category) ? true : false"
      />
    </div>
  </div>
</template>

<style scoped>
.gridContainer {
  box-shadow: 16px 18px 0px #7a7979;
  margin: 0 auto;
  border-style: solid;
  border-width: 4px;
  border-color: rgb(240, 123, 209);
  background-color: var(--tertiary-color);
  padding: 2%;
  width: fit-content;
}
.grid {
  display: grid;
  grid-column-start: initial;
  border-radius: 8px;
  grid-template-columns: repeat(4, 1fr);

  gap: 20px;
}

.matched {
  animation: shake 0.5s;
}
.no-1 {
  grid-row-start: 1;
}

.no-2 {
  grid-row-start: 2;
}

.no-3 {
  grid-row-start: 3;
}

.no-4 {
  grid-row-start: 4;
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
