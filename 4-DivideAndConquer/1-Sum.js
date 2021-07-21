const simpleSum = (nums) => {
  let sum = 0;
  for (const num of nums) sum += num;
  return sum;
};

console.time('simpleSum');
console.log(simpleSum([1, 4, 7, 2]));
console.timeEnd('simpleSum');

const sumUsingDivideAndConquer = (nums) => {
  if (nums.length === 1) return nums[0];

  return nums[0] + sumUsingDivideAndConquer(nums.slice(1));
};

console.time('sumUsingDivideAndConquer');
console.log(sumUsingDivideAndConquer([1, 4, 7, 2]));
console.timeEnd('sumUsingDivideAndConquer');
