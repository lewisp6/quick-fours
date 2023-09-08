<script setup>
import { computed, onMounted } from "vue";

const props = defineProps({
  timeRemaining: Number,
});
const countdown = () => {};

onMounted(() => {
  countdown();
});

const minutes = Math.floor(props.timeRemaining / 60);
const seconds = props.timeRemaining % 60;
const time = computed(() => `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
</script>

<template>
  <div class="countdown-timer">
    <span>{{ time }}</span>
  </div>
</template>

<style scoped>
.countdown-timer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.countdown-timer span {
  font-size: 20px;
}
</style>
