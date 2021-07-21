const simpleMax = (nums) => {
  let max = nums[0];
  for (const num of nums) if (num > max) max = num;
  return max;
};

const maxUsingDivideAndConquer = (nums, max = 0) => {
  if (nums.length === 0) return max;

  return maxUsingDivideAndConquer(nums.slice(1), nums[0] > max ? nums[0] : max);
};

console.time('simpleMax');
console.log(simpleMax([1, 4, 7, 2]));
console.timeEnd('simpleMax');

console.time('maxUsingDivideAndConquer');
console.log(maxUsingDivideAndConquer([1, 5, 56, 7, 13, 2, 6]));
console.timeEnd('maxUsingDivideAndConquer');
