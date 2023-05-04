<script setup>
import { ref } from "vue";

const props = defineProps({
  clue: String,
  category: String,
  onTileClick: Function,
  solved: Boolean,
  clear: Boolean,
});

let selected = ref(false);

function onClick() {
  selected.value = !selected.value;
  props.onTileClick(props.clue, props.category);
}
</script>

<template>
  <div className="tileContainer">
    <button @click="onClick()" :class="selected || solved ? 'highlight' : ''">
      {{ clue }}
    </button>
  </div>
</template>

<style scoped>
button {
  font-size: 1.4em;
  width: 200px;
  min-height: 100px;
  background-color: var(--grid-button-color);
  /* box-shadow: 6px 8px 0px #7a7979; */
  border-radius: 1px;
  border-style: solid;
  border-color: black;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: var(--grid-button-hover);
}

.highlight {
  background-color: rgb(209, 209, 251);
}

.highlight:hover {
  background-color: rgb(209, 209, 251);
}
</style>
