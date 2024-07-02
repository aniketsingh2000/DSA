// 17. Letter Combinations of a Phone Number
// Medium
// Topics
// Companies
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.




// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]


// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].



// const keyBordNumbers = {
//     2: 'abc',
//     3: 'def',
//     4: 'ghi',
//     5: 'jkl',
//     6: 'mno',
//     7: 'pqrs',
//     8: 'tuv',
//     10: 'wxyz'
// }


// function letterCobination(digit) {
//     digit = digit.toString();
//     let result = [''];

//     for (let i = 0; i < digit.length; i++) {
//         const numberString = keyBordNumbers[digit[i]];
//         const newResult = [];
//         for (let c = 0; c < result.length; c++) {
//             for (let j = 0; j < numberString.length; j++) {
//                 newResult.push(result[c] + numberString[j]);
//             }
//         }
//         result = newResult;

//     }
//     return result
// }


// const digit = 27;
// console.log(letterCobination(digit))




function letterCombinations(digits) {
    if (digits.length === 0) return [];

    const phoneMap = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };

    const result = [];

    function backtrack(index, currentCombination) {
        if (index === digits.length) {
            result.push(currentCombination.join(''));
            return;
        }

        const letters = phoneMap[digits[index]];
        for (let i = 0; i < letters.length; i++) {
            currentCombination.push(letters[i]);
            backtrack(index + 1, currentCombination);
            currentCombination.pop();
        }
    }

    backtrack(0, []);
    return result;
}

// Test cases
const digits1 = "23";
console.log(letterCombinations(digits1)); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

const digits2 = "";
console.log(letterCombinations(digits2)); // Output: []

const digits3 = "2";
console.log(letterCombinations(digits3)); // Output: ["a","b","c"]
