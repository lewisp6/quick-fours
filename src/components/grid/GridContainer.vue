<script setup>
import { reactive, ref } from "vue";
import Tile from "./GridTile.vue";
import FireworkLauncher from "../firework/FireworkLauncher.vue";
import CategoryGuess from "./CategoryGuess.vue";
import {
  hasMatch,
  selectTile,
  getCategoriesForTiles,
  getLinksForCategories,
} from "./logic/gameLogic";
import { scoreStore } from "../../state/score";

const props = defineProps({
  categories: Array,
});

const categoriesForTiles = getCategoriesForTiles(props.categories);
const links = getLinksForCategories(props.categories);
const selectedTiles = ref([]);
const failedTiles = ref([]);
let matchedCategories = reactive([]);

function onTileClick(clue, category) {
  failedTiles.value = [];
  if (matchedCategories.includes(category)) return;

  selectedTiles.value = selectTile(clue, category, selectedTiles.value);

  if (selectedTiles.value.length === 4) {
    if (hasMatch(selectedTiles.value, category)) {
      matchedCategories.push(category);
      // todo if 3 matched match the 4th
    }

    failedTiles.value = selectedTiles.value.slice();
    selectedTiles.value = [];
  }
}

function getMatchedClass(category) {
  return `matched no-${matchedCategories.indexOf(category) + 1}`;
}

function hasCategoryBeenSovled(category) {
  return matchedCategories.includes(category);
}

function isSelectedTile(clue) {
  return selectedTiles.value.some((tile) => tile.clue === clue);
}

function isFailedTile(clue) {
  return failedTiles.value.some((tile) => tile.clue === clue);
}

function extractClues(matchedCategory) {
  const clues = categoriesForTiles
    .map((category) => {
      if (category.category === matchedCategory) {
        return category.clue;
      }
    })
    .filter((clue) => clue);
  return clues.join(", ");
}
</script>

<template>
  <div className="container">
    <div className="grid unsovled">
      <Tile
        v-for="clues in categoriesForTiles"
        :key="clues.clue"
        :class="
          hasCategoryBeenSovled(clues.category)
            ? getMatchedClass(clues.category)
            : ''
        "
        @tile-clicked="onTileClick"
        :clue="clues.clue"
        :category="clues.category"
        :solved="hasCategoryBeenSovled(clues.category) ? true : false"
        :selected="isSelectedTile(clues.clue) ? true : false"
        :failed="isFailedTile(clues.clue) ? true : false"
      />
    </div>
  </div>
  <div className="container" v-if="matchedCategories.length === 4">
    <p className="congrats">Well done :-) now guess the categories:</p>
    <div className="guessWrap">
      <CategoryGuess
        v-for="(matched, index) in matchedCategories"
        :key="index"
        :label="extractClues(matched)"
        :link="links[matched]"
      />
    </div>
  </div>
</template>

<style scoped>
.guessWrap {
  display: grid;
}

.guess {
  padding-bottom: 20px;
}

.congrats {
  font-weight: bold;
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

.categoryContainer {
  margin: 0 auto;
  width: fit-content;
}

.categoryInput {
  width: 100%;
}
</style>
