<script setup>
import router from "@/router";
import Title from "./title/Title.vue";
import Button from "./button/Button.vue";
import { categoryStore } from "../state/categories";

function navigateToCreate() {
  router.push("/create");
}

function playGrid() {
  categoryStore.setExampleGrid();
  router.push("/grid");
}
</script>

<template>
  <section>
    <Title title="Welcome to Quick Fours" />
    <div className="buttonWrap">
      <Button className="play" @click="playGrid" label="Play a grid" />
      <Button
        className="create"
        @click="navigateToCreate"
        label="Create a grid"
      />
    </div>
  </section>
</template>

<style scoped>
section {
  display: grid;
  gap: 10%;
  place-items: center;
  margin: 15%;
}

.buttonWrap {
  width: 40%;
  justify-content: space-between;
}

.play {
  margin-bottom: 20px;
}
</style>
