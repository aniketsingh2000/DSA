// 7. Reverse Integer
// Medium
// Topics
// Companies
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21


// Constraints:

// -231 <= x <= 231 - 1


function reverse(x) {

    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);
    let result = '';
    x = x.toString();
    if (x[0] === '-') {
        result += '-';
        x = x.slice(1);
    }

    for (let i = (x.length - 1); i >= 0; i--) {
        result += x[i];
    }

    result = Number(result)

    if (result < INT_MIN || result > INT_MAX) {
        return 0;
    } else {
        return result
    }

}

// Example usage:
console.log(reverse(123));          // Output: 321
console.log(reverse(-123));         // Output: -321
console.log(reverse(120));          // Output: 21
console.log(reverse(1200));         // Output: 21
console.log(reverse(0));            // Output: 0
console.log(reverse(1534236469));   // Output: 0 (because the reversed number exceeds the 32-bit signed integer range)
console.log(reverse(1153423646));   // Output: 6462343511