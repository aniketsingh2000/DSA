// 3. Longest Substring Without Repeating Characters
// Medium
// Topics
// Companies
// Hint
// Given a string s, find the length of the longest 
// substring
//  without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.



// function longestSubstring(string) {

//     console.log("hello")
//     const result = [];
//     let numOfIndex = {}
//     let duplicateValue = []
//     let lastValue = ''
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === string[i + 1]) {
//             duplicateValue.push(string[i]);
//         } else {
//             if (string[i - 1] === lastValue) {
//                 numOfIndex[string[i]] = i;
//             }
//             lastValue = string[i]
//         }
//     }
//     console.log("parent")

//     console.log(numOfIndex)
//     return result;

// }


// const string = 'abcabcbb';
// // console.log(longestSubstring(string));

// longestSubstring(string);



function longestSubstring(s) {
    let charIndexMap = new Map();
    let start = 0;
    let maxLength = 0;
    let maxStart = 0; 

    for (let end = 0; end < s.length; end++) {
        let char = s[end];
        if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1;
        }
        charIndexMap.set(char, end);
        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            maxStart = start;
        }
    }

    const longestSubstring = s.slice(maxStart, maxStart + maxLength);
    return { length: maxLength, substring: longestSubstring };
}

const string = 'pwwkew';
const result = longestSubstring(string);
console.log(result);  // Output: { length: 3, substring: 'abc' }
