const sortedNumbers = [1, 3, 5, 7, 9, 13, 17];

/**
 *
 * @param {Array} list
 * @param {number} item
 */
const binarySearch = (list, item) => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = low + high;
    const currentItem = list[mid];
    if (item === currentItem) return item;

    currentItem > item ? (high = mid - 1) : (low = mid + 1);
  }
  return -1;
};

console.log(binarySearch(sortedNumbers, 13));
