
// Code
// Testcase
// Test Result
// Test Result
// 15. 3Sum
// Medium
// Topics
// Companies
// Hint
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.



// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.


// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105



// function threeSum(arr) {
//     let result = [];

//     let checkDuplicates = [];

//     for (let i = 0; i < arr.length - 2; i++) {
//         for (let j = i + 1; j < arr.length - 1; j++) {
//             for (let k = 0; k < arr.length; k++) {
//                 const triplet = [arr[i], arr[j], arr[k]].sort((a, b) => a - b);
//                 const tripletString = triplet.toString();
//                 if (!checkDuplicates.includes(tripletString)) {
//                     checkDuplicates.push(tripletString);
//                     const sum = arr[i] + arr[j] + arr[k];
//                     if (sum === 0) {
//                         result.push([arr[i], arr[j], arr[k]])
//                     }
//                 }
//             }
//         }
//     }
//     return result;
// }




function threeSum(nums) {

    nums.sort((a, b) => a - b);
    console.log(nums);

    let result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {

            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[left - 1]) right++;
                left++;
                right++;
            } else if (sum < 0) {
                left++
            } else {
                right--;
            }
        }
    }
    return result;
}

const arr = [-1, 0, 1, 2, -1, -4]


console.log(threeSum(arr));
