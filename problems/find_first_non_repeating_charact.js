function firstNonRepeatingCharacter(s) {
    // Create a hash map to store the count of each character
    const charCount = {};

    // First pass: count the occurrences of each character
    for (let char of s) {
        if (charCount[char] == null) {
            charCount[char] = 1;
        } else {
            charCount[char]++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i;
        }
    }

    return -1;
}

// Example usage:
const inputString = "AacblAbc";
console.log(firstNonRepeatingCharacter(inputString)); // Output: 4
