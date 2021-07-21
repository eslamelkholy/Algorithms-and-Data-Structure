const countUsingDivideAndConquer = (nums) => {
  if (nums.length === 1) return nums[0];

  return nums[0] + countUsingDivideAndConquer(nums.slice(1));
};

console.log(countUsingDivideAndConquer([1, 3, 6, 9]));
