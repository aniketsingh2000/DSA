// 1. Two Sum
// Easy
// Topics
// Companies
// Hint
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?




// function twoSumWayOne(nums,target){

//     let result = [];

//     for(let i =0; i< nums.length;i++){
//        for(let j = i+1; j<nums.length; j++){
//          const sum = nums[i] + nums[j]
//          if(sum === target){
//             result.push([i,j]);
//          }
//        }
//     }

//     return result;
// }


// const arr = [2,7,11,15];
// const target = 9;

// console.log(twoSumWayOne(arr,target));


//  the time complexity of way 1 is to O(n2);



function twoSumWayTwo(nums, target) {
    let result = [];
    let numIndex = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let leftValue = target - num;
        if (leftValue in numIndex) {
         result.push([numIndex[leftValue], i]);
        }
        numIndex[num] = i;
    }
    return result;
}


//  const arr = [2, 16, 7, 22, 34, 21, 13, 19, 8, 11, 15,];
//  const target = 24;

const arr = [3,2,4];
const target = 6;


console.log(twoSumWayTwo(arr,target));








