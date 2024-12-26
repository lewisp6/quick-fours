<script setup>
import { computed } from "vue";

const props = defineProps({
  clue: String,
  category: String,
  onTileClick: Function,
  solved: Boolean,
  selected: Boolean,
  failed: Boolean,
});

const tileClass = computed(() => {
  if (props.failed && !props.solved) {
    return "failed";
  }

  if (props.solved) {
    return "solved";
  }

  if (props.selected) {
    return "highlight";
  }

  return "";
});
</script>

<template>
  <div className="tileContainer">
    <button @click="$emit('tileClicked', clue, category)" :class="tileClass">
      {{ clue }}
    </button>
  </div>
</template>

<style scoped>
button {
  font-size: 12px;
  min-height: 30px;
  width: 100%;
  height: 100%;
  background-color: var(--grid-button-color);
  border-radius: 1px;
  border-style: solid;
  border-color: black;
  border-radius: 5px;
  cursor: pointer;
  @media screen and (min-width: 990px) {
    font-size: 1.2em;
    min-width: 200px;
    min-height: 100px;
  }
}

.failed {
  background-color: var(--grid-button-color);
  animation: shake 0.5s;
}

.solved {
  background-color: var(--grid-button-solved);
}

button:hover {
  background-color: var(--grid-button-hover);
}

.highlight {
  background-color: var(--grid-button-highlight);
}

.highlight:hover {
  background-color: var(--grid-button-highlight);
}
</style>
