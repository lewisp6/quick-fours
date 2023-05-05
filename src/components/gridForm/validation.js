export function validate(categoryList) {
  const flatCategoryList = categoryList.flat();

  return (
    hasNoInvalidFields(flatCategoryList) &&
    hasNoDuplicateFields(flatCategoryList)
  );
}

function hasNoInvalidFields(flatCategoryList) {
  return flatCategoryList.every((category) => {
    if (isClue(category)) {
      return category.clue !== undefined && category.clue.length > 0;
    }
    if (isLink(category)) {
      return category.link !== undefined && category.link.length > 0;
    }
  });
}

function hasNoDuplicateFields(flatCategoryList) {
  return (
    [
      ...new Set(
        flatCategoryList.map((category) => {
          if (isLink(category)) return category.link;
          if (isClue(category)) return category.clue;
        })
      ),
    ].length === flatCategoryList.length
  );
}

function isLink(category) {
  return "link" in category;
}

function isClue(category) {
  return "clue" in category;
}
