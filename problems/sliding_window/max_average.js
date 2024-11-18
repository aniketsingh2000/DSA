// Max Average Subarray I
// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10^-5 will be accepted.



// Example:

// Input: [1,13,-6,-3,40,2], k = 4

// Output: 11

// 13 + -6 + -3 + 40 = 44; 44/4 = 11






// without sliding window
// function findMaxAverage(nums, k) {
  
//     let toLoop = nums.length-k;
//     let max_average = -Infinity;
//     for(let i=0; i <=toLoop; i++){
//          const cloneNums = [...nums];
//          const subArray = cloneNums.splice(i,k);
//          const sum =  subArray.reduce((acc,cur) => acc+cur , 0 ) / k; 
//          if(sum > max_average){
//              max_average = sum;
//          }
       
//     }
    
//     return max_average === -Infinity ? 0 : max_average;
      
//   }



// with sliding window approach

function findMaxAverage(nums, k) {
  
    let currentSum = 0;
    
    for(let i =0; i< k; i++){
        currentSum += nums[i];
    }
    
    let maxSum = currentSum;
    
    for(let i = k;i < nums.length; i++){
       currentSum = currentSum - nums[i-k] + nums[i];
       if(currentSum > maxSum) {
           maxSum = currentSum;
       }
    }
    
    return maxSum /k; 
  }
  
  const nums = [1,13,-6,-3,40,2];
  const k = 4;
  
//   T =  O(n);
//   s =  O(1);
  
  console.log(findMaxAverage(nums,k));
