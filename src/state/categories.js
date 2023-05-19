import { reactive } from "vue";

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

export const exampleCategoryOne = [
  { clue: "a", category: "one" },
  { clue: "aa", category: "one" },
  { clue: "aaa", category: "one" },
  { clue: "aaaa", category: "one" },
  { link: "az", category: "one" },
];

export const exampleCategoryTwo = [
  { clue: "b", category: "two" },
  { clue: "bb", category: "two" },
  { clue: "bbb", category: "two" },
  { clue: "bbbb", category: "two" },
  { link: "bz", category: "two" },
];

export const exampleCategoryThree = [
  { clue: "c", category: "three" },
  { clue: "cc", category: "three" },
  { clue: "ccc", category: "three" },
  { clue: "cccc", category: "three" },
  { link: "cz", category: "three" },
];

export const exampleCategoryFour = [
  { clue: "d", category: "four" },
  { clue: "dd", category: "four" },
  { clue: "ddd", category: "four" },
  { clue: "dddd", category: "four" },
  { link: "dz", category: "four" },
];

export const categoryStore = reactive({
  categories: [categoryOne, categoryTwo, categoryThree, categoryFour],
  setExampleGrid() {
    this.categories = [
      exampleCategoryOne,
      exampleCategoryTwo,
      exampleCategoryThree,
      exampleCategoryFour,
    ];
  },
});
