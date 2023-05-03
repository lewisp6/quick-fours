<script setup>
defineProps({
  clue: String,
  category: String,
  onTileClick: Function,
});
</script>

<template>
  <div className="tileContainer">
    <button @click="onTileClick(clue, category)">{{ clue }}</button>
  </div>
</template>

<style scoped>
button {
  font-size: 1.4em;
  width: 200px;
  min-height: 100px;
  background-color: var(--grid-button-color);
  box-shadow: 6px 8px 0px #7a7979;
  border-radius: 1px;
  border-style: solid;
  border-color: black;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: var(--grid-button-hover);
}
</style>
