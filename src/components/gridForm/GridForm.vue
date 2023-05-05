<script setup>
import router from "@/router";
import Button from "../button/Button.vue";
import { combinedCategories } from "../../state/categories.js";
import { validate } from "./validation.js";
import { ref } from "vue";

let error = ref(false);

function onSubmit() {
  if (validate(combinedCategories)) {
    router.push("/grid");
  } else {
    error.value = true;
  }
};

const labels = ["First", "Second", "Third", "Fourth", "Link"];
</script>

<template>
  <p v-if="error" className="error">
    Please make sure every clue and link is populated and unique.
  </p>
  <form @submit.prevent="onSubmit" className="create-form">
    <div className="categories">
      <section v-for="(category, index) in combinedCategories" :key="index">
        <h2>{{ labels[index] }} Category</h2>
        <div v-for="(clue, index) in category" :key="index">
          <label
            >{{ labels[index] }} word or phrase
            <input
              v-if="clue.hasOwnProperty('clue')"
              v-model="clue.clue"
              placeholder="Enter your word or phrase"
            />
            <input
              v-if="clue.hasOwnProperty('link')"
              v-model="clue.link"
              placeholder="Enter your word or phrase"
            />
          </label>
        </div>
      </section>
    </div>
    <Button label="Play!" className="submit-button" />
  </form>
</template>

<style scoped>
.error {
  font-size: larger;
  color: rgb(67, 3, 3);
  padding: 20px;
  background-color: rgb(255, 210, 210);
  border-style: dotted;
  border-width: 2px;
}

.categories {
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  gap: 40px;
  margin-top: 20px;
}

.create-form h2 {
  margin: 0 0 20px;
}

.create-form input {
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
  font-size: 18px;
}

section {
  border-style: inset;
  border-width: 1px;
  padding: 12px;
  box-shadow: 6px 8px 0px #7a7979;
  background-color: var(--tertiary-color);
}

.link {
  padding-top: 30px;
  border-top: dotted;
}

.submit-button {
  width: 400px;
  margin: 40px auto;
  display: block;
}
</style>
