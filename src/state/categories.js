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
  { clue: "a", category: "one" },
  { clue: "aa", category: "one" },
  { clue: "aaa", category: "one" },
  { clue: "aaaa", category: "one" },
  { link: "a", category: "one" },
];

export const categoryTwo = [
  { clue: "b", category: "two" },
  { clue: "bb", category: "two" },
  { clue: "bbb", category: "two" },
  { clue: "bbbb", category: "two" },
  { link: "b", category: "two" },
];

export const categoryThree = [
  { clue: "c", category: "three" },
  { clue: "cc", category: "three" },
  { clue: "ccc", category: "three" },
  { clue: "cccc", category: "three" },
  { link: "c", category: "three" },
];

export const categoryFour = [
  { clue: "d", category: "four" },
  { clue: "dd", category: "four" },
  { clue: "ddd", category: "four" },
  { clue: "dddd", category: "four" },
  { link: "d", category: "four" },
];

export const combinedCategories = [
  categoryOne,
  categoryTwo,
  categoryThree,
  categoryFour,
];
