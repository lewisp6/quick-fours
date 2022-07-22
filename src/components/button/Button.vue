<script>
export default {
  props: ["label"],
};
</script>

<template>
  <button>
    {{ label }}
  </button>
</template>

<style scoped>
button {
  padding: 1em 5em;
  font-size: 18px;
  box-shadow: 6px 8px 0px #7a7979;
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

button:active {
  box-shadow: 2px 4px 0px #7a7979;
  transform: translateY(0);
}
</style>
