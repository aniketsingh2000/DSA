// 47. Permutations II
// Medium
// Topics
// Companies
// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.



// Example 1:

// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// Example 2:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]


// Constraints:

// 1 <= nums.length <= 8
// -10 <= nums[i] <= 10



function findPermutation(arr) {

    if (arr.length <= 1) {
        return [arr];
    }

    let permutations = new Set();
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        let remainingPermutation = arr.slice(0, i).concat(arr.slice(i + 1));
        let leftPermuntation = findPermutation(remainingPermutation);

        for (let perm of leftPermuntation) {
            permutations.add([currentElement, ...perm].toString());
        }
    }
    return  Array.from(permutations).map(perm => perm.split(',').map(Number));;
}



const arr = [-2,1,-3,4,-1,2,1,-5,4]
console.log(findPermutation(arr));