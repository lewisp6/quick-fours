import { reactive } from "vue";

export const scoreStore = reactive({
  score: 0,
  guess: 0,
  increaseScore() {
    this.score++;
  },
  increaseGuess() {
    this.guess++;
  },
});
