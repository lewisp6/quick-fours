<script setup>
import { computed, ref } from "vue";
import { scoreStore } from "../../state/score";
import { compareStrings } from "./logic/compareStrings";

const props = defineProps({
  label: String,
  link: String,
});

const guess = ref("");
const correct = ref(undefined);

function submitGuess() {
  scoreStore.increaseGuess();
  correct.value = compareStrings(guess.value, props.link);

  if (correct.value) {
    scoreStore.increaseScore();
  }
}

const showAnswer = computed(() => {
  return correct.value !== undefined;
});

const answer = computed(() => {
  return correct.value ? "Correct! " + props.link : "Incorrect: " + props.link;
});
</script>

<template>
  <div className="guessWrap">
    <label for="guess">{{ label }}</label>
    <input id="guess" className="guessInput" name="guess" v-model="guess" />
    <button
      className="guessButton"
      @click="submitGuess()"
      :disabled="showAnswer"
    >
      Guess
    </button>
    <p v-if="showAnswer">
      {{ answer }}
    </p>
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
  @media screen and (min-width: 768px) {
    font-size: 1.2em;
  }
  font-size: 12px;
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
