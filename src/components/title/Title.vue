<script>
export default {
  props: ["title"],
};
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<style scoped>
h1 {
  @media screen and (min-width: 990px) {
    font-size: var(--h1-desktop-font-size);
  }

  font-size: var(--h1-mobile-font-size);
}
</style>
