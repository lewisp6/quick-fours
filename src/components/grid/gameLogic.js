import { compose } from "ramda";
import { shuffle } from "./shuffle";

export function selectTile(clue, category, selectedList = []) {
  if (
    selectedList.some((item) => item.clue === clue && item.category == category)
  ) {
    selectedList.splice(selectedList.indexOf({ clue, category }), 1);
  } else {
    selectedList.push({ clue, category });
  }

  return selectedList;
}

export function hasMatch(selectedList, category) {
  return selectedList.every((item) => item.category === category);
}

function filterLinksFromCategories(categories) {
  return categories
    .map((category) => {
      return category.filter((cluesWithLinks) => !("link" in cluesWithLinks));
    })
    .flat();
}

export const getCategoriesForTiles = compose(
  shuffle,
  filterLinksFromCategories
);
