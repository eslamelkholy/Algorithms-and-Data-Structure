/**
 * Search for LCS
 *
 * @param {string} str1 first string
 * @param {string} str2 second string
 * @return {object} with keys: lcs, offset, sequence, dp
 */
function lcs(str1, str2) {
  const dp = new Array(str1.length + 1).fill(0).map(() => new Array(str2.length + 1).fill(0)); // Initialize the Grid
  let longesSubString = 0;
  let lastSubIndex = 0;

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        if (dp[i][j] === 0) {
          dp[i + 1][j + 1] = 1;
        } else {
          dp[i + 1][j + 1] = dp[i][j] + 1;
        }

        if (dp[i + 1][j + 1] > longesSubString) {
          longesSubString = dp[i + 1][j + 1];
          lastSubIndex = i;
        }
      }
    }
  }
  return {
    dp,
    longesSubString,
    offset: lastSubIndex - longesSubString + 1,
    sequence: str1.slice(lastSubIndex - lcs + 1, lastSubIndex + 1),
  };
}

console.log(lcs('fish', 'hish')); // { lcs: 3, offset: 1, sequence: 'ish' }
// console.log(lcs('vista', 'hish')); // { lcs: 2, offset: 1, sequence: 'is' }
// console.log(lcs('google', 'abcdefgooglehijklm')); // { lcs: 6, offset: 0, sequence: 'google' }
// console.log(lcs('0', 0)); // { lcs: 0, offset: 0, sequence: '' }
