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
