
export function selectTile(clue, category, selectedList = []) {
  selectedList.push({ clue, category });
  return selectedList;
}

export function hasMatch(selectedList, category) {
  return selectedList.every((item) => item.category === category);
}