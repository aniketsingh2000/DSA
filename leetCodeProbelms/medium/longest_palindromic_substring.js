// 5. Longest Palindromic Substring
// Medium
// Topics
// Companies
// Hint
// Given a string s, return the longest 
// palindromic

// substring
//  in s.



// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"


// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.




function longest_palindromic_substring(string) {
    let tempCombos = [];

    let max_palindrom = [];
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j <= string.length; j++) {
            const temp = string.slice(i, j);
            if (temp.length > 1) {
                tempCombos.push(temp);
                const splitString = temp.split("");
                const splitReverse = splitString.reverse()
                const reverse = splitReverse.join("");
                if (temp === reverse) {
                    const max_len_palindrome = max_palindrom[0] ? (max_palindrom[0].length >= temp.length ? '' : temp) : temp;
                    if (max_len_palindrome) {
                        max_palindrom[0] = max_len_palindrome
                        // max_palindrom.push(max_len_palindrome);
                    }
                }
            }
        }
    }
    return max_palindrom
}

// const string = 'cbbd';
const string = 'cbbd';
// moom
console.log(longest_palindromic_substring(string));


// cb
// cbb
// cbbd
// bb
// bbd
// bd
