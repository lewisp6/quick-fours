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
  <div className="guessWrap">
    <label for="guess">{{ label }}</label>
    <input id="guess" className="guessInput" name="guess" v-model="guess" />
    <button @click="submitGuess()">Go</button>
    <p v-if="show">{{ correct ? "Correct!" : "Incorrect: " + link }}</p>
  </div>
</template>

<style scoped>
.guessWrap {
  margin-bottom: 10px;
}
.guessInput {
  position: relative;
  font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border: 2px solid;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 10px;
}
</style>
