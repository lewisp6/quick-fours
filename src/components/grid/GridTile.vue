<script setup>
import { computed } from 'vue';

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
  font-size: 1.4em;
  width: 200px;
  min-height: 100px;
  background-color: var(--grid-button-color);
  border-radius: 1px;
  border-style: solid;
  border-color: black;
  border-radius: 5px;
  cursor: pointer;
}

.failed {
  background-color: var(--grid-button-color);
  animation: shake 0.5s;
}

.solved {
  background-color: rgb(179, 249, 179);
}

button:hover {
  background-color: #e6fdff;
}

.highlight {
  background-color: rgb(209, 209, 251);
}

.highlight:hover {
  background-color: rgb(209, 209, 251);
}
</style>
