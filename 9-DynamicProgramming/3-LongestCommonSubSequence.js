/**
 * Search for LCS
 *
 * @param {string} str1 first string
 * @param {string} str2 second string
 * @return {object} with keys: lcs, offset, sequence, dp
 */
function getEditDistance(str1, str2) {
  let dp = [];

  // Fill the column
  for (i = 0; i <= str1.length; i++) {
    dp[i] = [i];
  }

  // Fill the column
  for (j = 0; j <= str2.length; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1.charAt(i - 1) == str2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + 1, // substitution
          Math.min(
            dp[i][j - 1] + 1, // insertion
            dp[i - 1][j] + 1
          )
        ); // deletion
      }
    }
  }
  return dp[str1.length][str2.length];
}

console.log(getEditDistance('google', 'notgoogl')); // 4
