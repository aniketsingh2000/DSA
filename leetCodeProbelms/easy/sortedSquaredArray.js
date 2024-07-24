function sortedSquareddArray(arr) {

    let n = arr.length;
    let result = new Array(n);
    let left = 0;
    let right = n - 1;
    let index = n - 1;

    while (left <= right) {

        let leftSquare = arr[left] * arr[left];
        let rightSquare = arr[right] * arr[right];

        if (leftSquare > rightSquare) {
            result[index] = leftSquare;
            left++
        } else {
            result[index] = rightSquare;
            right--
        }
        index--;
    }

    return result;

}

const arr = [-7,2, 3, 5, 6, 8, 9];
console.log(sortedSquareddArray(arr));

// function sortedSquares(nums) {
//     let n = nums.length;
//     let result = new Array(n);
//     let left = 0;
//     let right = n - 1;
//     let index = n - 1;

//     while (left <= right) {
//         let leftSquare = nums[left] * nums[left];
//         let rightSquare = nums[right] * nums[right];

//         if (leftSquare > rightSquare) {
//             result[index] = leftSquare;
//             left++;
//         } else {
//             result[index] = rightSquare;
//             right--;
//         }
//         index--;
//     }

//     return result;
// }

// // Example usage:
// let nums = [-4, -1, 0, 3, 10];
// console.log(sortedSquares(nums));  // Output: [0, 1, 9, 16, 100]
