<script setup>
import { ref } from "vue";
import { scoreStore } from "../../state/score";

const props = defineProps({
  label: String,
  link: String,
});

const guess = ref("");
const show = ref(false);
const correct = ref();

function submitGuess() {
  scoreStore.increaseGuess();
  show.value = !show.value;
  correct.value = guess.value && props.link.toLowerCase().includes(guess.value.toLowerCase());
  if (correct.value) {
    scoreStore.increaseScore();
  }
}
</script>

<template>
  <div className="guessWrap">
    <label for="guess">{{ label }}</label>
    <input id="guess" className="guessInput" name="guess" v-model="guess" />
    <button className="guessButton" @click="submitGuess()" :disabled="show">
      Guess
    </button>
    <p v-if="show">{{ correct ? "Correct! " + link : "Incorrect: " + link }}</p>
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
  height: 35px;
}

button {
  height: 35px;
  font-size: 18px;
  background-color: var(--secondary-color);
  border-radius: 1px;
  border-style: solid;
  border-color: black;
  cursor: pointer;
}

button:hover,
button:focus {
  background-color: var(--button-hover-color);
}
</style>
