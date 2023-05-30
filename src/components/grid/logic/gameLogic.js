import { compose } from "ramda";
import { shuffle } from "./shuffle";

export function selectTile(clue, category, selectedList = []) {
  return selectedList.some(
    (item) => item.clue === clue && item.category == category
  )
    ? selectedList.filter((item) => item.clue !== clue)
    : selectedList.concat({ clue, category });
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

export function getLinksForCategories(categories) {
  return categories.flat().reduce((links, category) => {
    if ("link" in category) {
      links[category.category] = category.link;
    }
    return links;
  }, {});
}
