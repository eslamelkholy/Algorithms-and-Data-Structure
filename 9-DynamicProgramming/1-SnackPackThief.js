const findMaxCost = (values, weights, target) => {
  const dp = new Array(values.length + 1).fill(0).map(() => new Array(target + 1).fill(0)); // Initialize the Grid

  for (let i = 1; i <= values.length; i++) {
    for (let j = 0; j <= target; j++) {
      // base case: don't pick ith element if j-weights[i-1] is negative
      if (weights[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        // store the max value that we get by picking or leaving the i'th item
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i - 1]] + values[i - 1]);
      }
    }
  }
  return dp;
};

const values = [12, 2, 1, 4, 1];
const weights = [4, 2, 1, 10, 2];
const target = 15;
console.log(findMaxCost([1500, 3000, 2000], [1, 4, 3], 4));
