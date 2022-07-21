<script setup>
import router from "@/router";
import Button from "../button/Button.vue";
import { categories } from "../../state/categories.js";
import { validate } from "./validation";

const onSubmit = function (e) {
  const invalidFields = validate(categories);
  router.push("/grid");
};
</script>

<template>
  <form @submit.prevent="onSubmit" className="create-form">
    <div className="categories">
      <section className="category-one">
        <h2>First Category</h2>
        <label
          >First word or phrase
          <input
            v-model="categories.categoryOne.first"
            placeholder="Enter your word or phrase"
          />
        </label>
        <label
          >Second word or phrase
          <input
            v-model="categories.categoryOne.second"
            placeholder="Enter your word or phrase"
          />
        </label>
        <label
          >Third word or phrase
          <input
            v-model="categories.categoryOne.third"
            placeholder="Enter your word or phrase"
          />
        </label>
        <label
          >Fourth word or phrase
          <input
            v-model="categories.categoryOne.fourth"
            placeholder="Enter your word or phrase"
          />
        </label>
        <div className="link">
          <label
            >The connecting link
            <input
              v-model="categories.categoryOne.link"
              placeholder="Enter the link"
            />
          </label>
        </div>
      </section>
      <section className="category-two">
        <h2>Second Category</h2>
        <label
          >First word or phrase
          <input
            v-model="categories.categoryTwo.first"
            placeholder="Enter your word or phrase"
          />
        </label>
        <label
          >Second word or phrase
          <input
            v-model="categories.categoryTwo.second"
            placeholder="Enter your word or phrase"
          />
        </label>
        <label
          >Third word or phrase
          <input
            v-model="categories.categoryTwo.third"
            placeholder="Enter your word or phrase"
          />
        </label>
        <label
          >Fourth word or phrase
          <input
            v-model="categories.categoryTwo.fourth"
            placeholder="Enter your word or phrase"
          />
        </label>
        <div className="link">
          <label
            >The connecting link
            <input
              v-model="categories.categoryTwo.link"
              placeholder="Enter the link"
            />
          </label>
        </div>
      </section>
      <section className="category-three">
        <h2>Third Category</h2>
        <label
          >First word or phrase
          <input
            v-model="categories.categoryThree.one"
            placeholder="Enter your word or phrase"
          />
        </label>
        <label
          >Second word or phrase
          <input
            v-model="categories.categoryThree.two"
            placeholder="Enter your word or phrase"
          />
        </label>
        <label
          >Third word or phrase
          <input
            v-model="categories.categoryThree.three"
            placeholder="Enter your word or phrase"
          />
        </label>
        <label
          >Fourth word or phrase
          <input
            v-model="categories.categoryThree.four"
            placeholder="Enter your word or phrase"
          />
        </label>
        <div className="link">
          <label
            >The connecting link
            <input
              v-model="categories.categoryThree.link"
              placeholder="Enter the link"
            />
          </label>
        </div>
      </section>
      <section className="category-four">
        <h2>Fourth Category</h2>
        <label
          >First word or phrase
          <input
            v-model="categories.categoryFour.one"
            placeholder="Enter your word or phrase"
          />
        </label>
        <label
          >Second word or phrase
          <input
            v-model="categories.categoryFour.two"
            placeholder="Enter your word or phrase"
          />
        </label>
        <label
          >Third word or phrase
          <input
            v-model="categories.categoryFour.three"
            placeholder="Enter your word or phrase"
          />
        </label>
        <label
          >Fourth word or phrase
          <input
            v-model="categories.categoryFour.four"
            placeholder="Enter your word or phrase"
          />
        </label>
        <div className="link">
          <label
            >The connecting link
            <input
              v-model="categories.categoryFour.link"
              placeholder="Enter the link"
            />
          </label>
        </div>
      </section>
    </div>
    <Button label="Play!" className="submit-button" />
  </form>
</template>

<style scoped>
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
