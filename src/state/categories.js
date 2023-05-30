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
  { clue: "Chelsea", category: "one" },
  { clue: "Manchester United", category: "one" },
  { clue: "Real Madrid", category: "one" },
  { clue: "Tottenham", category: "one" },
  { link: "Football clubs", category: "one" },
];

export const exampleCategoryTwo = [
  { clue: "Styles", category: "two" },
  { clue: "Mars", category: "two" },
  { clue: "Bieber", category: "two" },
  { clue: "Grande", category: "two" },
  { link: "List of famous singers", category: "two" },
];

export const exampleCategoryThree = [
  { clue: "Dior", category: "three" },
  { clue: "Ted Baker", category: "three" },
  { clue: "Gucci", category: "three" },
  { clue: "Nike", category: "three" },
  { link: "Designer brands", category: "three" },
];

export const exampleCategoryFour = [
  { clue: "Jupiter", category: "four" },
  { clue: "Venus", category: "four" },
  { clue: "Saturn", category: "four" },
  { clue: "Mercury", category: "four" },
  { link: "Planets", category: "four" },
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
