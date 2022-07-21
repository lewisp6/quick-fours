export function validate(categories) {
  const categoryList = Object.entries(categories);

  return categoryList.reduce((missing, [category, fields]) => {
    const missingFields = Object.entries(fields)
      .filter(([fieldName, fieldValue]) => fieldValue.length === 0)
      .map(([fieldName]) => fieldName);

    return [...missing, { category: category, missingFields: missingFields }];
  }, []);
}
