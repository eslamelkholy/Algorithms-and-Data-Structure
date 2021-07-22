/**
 * Quick array sorting
 * @param {Array} array Source array
 * @returns {Array} Sorted array
 */
const quickSort = (array) => {
  if (array.length < 2) return array;

  const pivot = array[0];

  const lessThanPivot = array.slice(1).filter((e) => e <= pivot); // Sub Array Of All Element Less Than Pivot
  const greaterThanPivot = array.slice(1).filter((e) => e > pivot); // Sub Array Of All Element Greater Than Pivot

  return quickSort(lessThanPivot).concat([pivot], quickSort(greaterThanPivot));
};

console.log(quickSort([10, 5, 2, 3]));
