import { reactive } from "vue";

export const categories = reactive({
  categoryOne: {
    first: "",
    second: "",
    third: "",
    fourth: "",
    link: "",
  },
  categoryTwo: {
    first: "",
    second: "",
    third: "",
    fourth: "",
    link: "",
  },
  categoryThree: {
    first: "",
    second: "",
    third: "",
    fourth: "",
    link: "",
  },
  categoryFour: {
    first: "",
    second: "",
    third: "",
    fourth: "",
    link: "",
  },
});

export const categoryOne = [
  { clue: "", category: "one" },
  { clue: "", category: "one" },
  { clue: "", category: "one" },
  { clue: "", category: "one" },
  { link: "", category: "one" },
];

export const categoryTwo = [
  { clue: "", category: "two" },
  { clue: "", category: "two" },
  { clue: "", category: "two" },
  { clue: "", category: "two" },
  { link: "", category: "two" },
];

export const categoryThree = [
  { clue: "", category: "three" },
  { clue: "", category: "three" },
  { clue: "", category: "three" },
  { clue: "", category: "three" },
  { link: "", category: "three" },
];

export const categoryFour = [
  { clue: "", category: "four" },
  { clue: "", category: "four" },
  { clue: "", category: "four" },
  { clue: "", category: "four" },
  { link: "", category: "four" },
];

export const combinedCategories = [
  categoryOne,
  categoryTwo,
  categoryThree,
  categoryFour,
];
