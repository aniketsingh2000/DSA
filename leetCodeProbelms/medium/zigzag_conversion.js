// 6. Zigzag Conversion
// Medium
// Topics
// Companies
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);


// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"




function zigzagConversion(string, rows) {
    let result = '';
    let totalCol = Math.floor(string.length / 2);


const newArr = new Array(rows).fill('');
let currentRow = 0;
let goingDown = false;
console.log(newArr);
    for (let i = 0; i <string.length; i++) {
        newArr[currentRow] += string[i];
        if(currentRow === 0 || currentRow === rows-1){
            goingDown = !goingDown;
        }
        currentRow += goingDown ? 1 : -1;
    }
    console.log(result,newArr,newArr.join(''))

}


const string = 'ANIKETSINGH';
const rows = 3;
// 4 = 'PINALSIGYAHRPI';
// 3 = ''
zigzagConversion(string, rows,); 