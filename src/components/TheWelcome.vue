<script setup>
import Title from "./title/Title.vue";
import Button from "./button/Button.vue";
</script>

<template>
  <section>
    <Title title="Welcome to Quick Fours" />
    <Button label="Create a grid" />
  </section>
</template>

<style scoped>
section {
  display: grid;
  gap: 50%;
  place-items: center;
  margin: 15%;
}
</style>
