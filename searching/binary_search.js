// What is Binary Search?
// Binary search is a searching algorithm used to find the position of a target value within a sorted array. It works by repeatedly dividing the search interval in half until the target value is found or the interval becomes empty.

// Benefits of Binary Search:

// Efficiency: Binary search is highly efficient, especially for large datasets, as it reduces the search space by half with each iteration. This makes it much faster than linear search for sorted arrays.

// Applicability: Binary search is applicable only for sorted arrays, but when the data is already sorted, it offers a significant advantage over other search algorithms in terms of time complexity.

// Simplicity: Although binary search requires the array to be sorted, its implementation is relatively simple and straightforward compared to more complex searching algorithms.

// Time Complexity of Binary Search:
// The time complexity of binary search is O(log n), where n is the number of elements in the array. This is because with each iteration, the search space is reduced by half, leading to a logarithmic time complexity.

// Real-life Example:
// Imagine you have a phonebook sorted alphabetically by names. 
// If you're looking for a particular name, you wouldn't start searching from the first name and sequentially scan through each entry. 
// Instead, you'd open the phonebook roughly in the middle and determine whether the name you're looking for comes before or after the current page. 
// Then, you'd repeat this process, narrowing down your search space with each iteration until you find the desired name. This process closely resembles binary search.

// code example



function binarySearch(arr,target){
  let left = 0;
  let right = arr.length-1;
    
  while(left <= right){
      let mid = Math.floor((left+right)/2); 

      if(arr[mid] === target){
         return mid;
      } else if(arr[mid] < target){
          left = mid +1
      } else{
        right = mid -1;
      }
  }
  return -1; 
}


const arr = [2, 4, 7, 9, 11, 13, 15, 18];
const target = 9;
const result = binarySearch(arr, target)

console.log(`Target Index ${result < 0 ? 'Not Found' : 'Found (' + result + ')'}`,)