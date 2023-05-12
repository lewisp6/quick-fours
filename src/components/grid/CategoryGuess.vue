<script setup>
import { ref } from "vue";

const props = defineProps({
  label: String,
  link: String,
});

const guess = ref("");
const show = ref(false);
const correct = ref();

function submitGuess() {
  show.value = !show.value;
  correct.value = props.link.includes(guess.value);
}
</script>

<template>
  <label for="guess">{{ label }}</label>
  <input id="guess" name="guess" v-model="guess" />
  <button @click="submitGuess()">Go</button>
  <p v-if="show">{{ correct ? "Correct!" : "Incorrect: " + link }}</p>
</template>

<style scoped>
</style>
