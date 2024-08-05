
// Code
// Testcase
// Test Result
// Test Result
// 44. Wildcard Matching
// Hard
// Topics
// Companies
// Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).

 

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "*"
// Output: true
// Explanation: '*' matches any sequence.
// Example 3:

// Input: s = "cb", p = "?a"
// Output: false
// Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
 

// Constraints:

// 0 <= s.length, p.length <= 2000
// s contains only lowercase English letters.
// p contains only lowercase English letters, '?' or '*'.




// function isMatch (s,p) {
//   const slen = s.length;
//   const plen = p.length;

//   let result = false;
//   for(let i=0; i< slen; i++){
//     for(let j=0; j< plen; j++){
//          if(p[j] === '?' && ( s[i+1] === p[j+1]   )){
//             console.log("first")
//             result = true;
//          }
//          if(p[j] === '*' && (s[i] === s[i+1])){
//             console.log("second")
//             result = true;
//          }
//     }
//   }

//   return result

// };


// const s = 'acdcb';
// const p = 'a*c?b';

// console.log(isMatch(s,p))




function isMatch(s, p) {
    const sLen = s.length;
    const pLen = p.length;
    
    // Create a DP table with (sLen + 1) rows and (pLen + 1) columns
    const dp = Array.from({ length: sLen + 1 }, () => Array(pLen + 1).fill(false));
    // console.log(dp)
    
    // Base case: empty string and empty pattern are a match
    dp[0][0] = true;
    
    // Fill the first row (s is empty, p is non-empty)
    for (let j = 1; j <= pLen; j++) {
      if (p[j - 1] === '*') {
        dp[0][j] = dp[0][j - 1];
      }
    }

    // console.log(dp);
    
    // Fill the DP table
    for (let i = 1; i <= sLen; i++) {
      for (let j = 1; j <= pLen; j++) {
        if (p[j - 1] === '*') {
          // '*' can match zero or more characters
          dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
        } else if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
          // '?' matches any single character, or characters match directly
          dp[i][j] = dp[i - 1][j - 1];
        }
      }
    }
    
    console.log(dp,sLen,pLen);
    return dp[sLen][pLen];
  }
  
  // Example usage:
//   console.log(isMatch("aa", "a"));    // Output: false
//   console.log(isMatch("aa", "*"));    // Output: true
//   console.log(isMatch("cb", "?a"));   // Output: false
//   console.log(isMatch("adceb", "*a*b")); // Output: true
  console.log(isMatch("acdcb", "a*c?b")); // Output: false
  