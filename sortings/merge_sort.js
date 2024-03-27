// Merge Sort:
// Definition:
// Merge Sort is a comparison-based sorting algorithm that follows the Divide and Conquer strategy. It divides the input array into two halves, recursively sorts each half, and then merges the sorted halves to produce a single sorted array.

// How it works:
// Divide: Divide the unsorted array into two halves.
// Conquer: Recursively sort the two halves.
// Merge: Merge the sorted halves to produce a single sorted array.

// Performance Characteristics:
// Time Complexity: The time complexity of Merge Sort is O(n log n) in all cases, making it more efficient than Bubble Sort, Selection Sort, and Insertion Sort for large datasets.
// Space Complexity: Merge Sort has a space complexity of O(n) due to the need for temporary arrays during the merging phase.
// Stability: Merge Sort is stable because it preserves the relative order of equal elements.

// Advantages:
// Efficiency: Merge Sort is highly efficient, especially for large datasets, due to its O(n log n) time complexity.
// Stability: Merge Sort preserves the relative order of equal elements, making it suitable for applications that require stability.
// Predictable Performance: Merge Sort's time complexity remains consistent regardless of the input data, making it a reliable choice for sorting.

// Disadvantages:
// Space Usage: Merge Sort requires additional space for temporary arrays during the merging phase, making it less space-efficient than in-place sorting algorithms like Quick Sort.
// Recursive Overhead: The recursive nature of Merge Sort can lead to additional function call overhead, especially for large arrays.

// Example:
// Consider an array [38, 27, 43, 3, 9, 82, 10]. The steps of Merge Sort would involve recursively dividing the array into halves, sorting each half, and then merging the sorted halves to produce the final sorted array.

// Merge Sort is one of the most efficient sorting algorithms, offering consistent performance and stability. It is widely used in practice for sorting large datasets efficiently.


// code example

function mergeSort(arr){
    if(arr.length<=1){
      return arr;
    }

    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);

    const sortedLeftArr =  mergeSort(left);
    const sortedRightArr = mergeSort(right);

    return merge(sortedLeftArr,sortedRightArr);

}


function merge(leftArr,rightArr){
    
    let result = [];
    let leftInd = 0;
    let rightInd = 0;

    while(leftInd < leftArr.length && rightInd < rightArr.length){
        if(leftArr[leftInd] < rightArr[rightInd]){
            result.push(leftArr[leftInd]);
            leftInd++;
        }
        else {
            result.push(rightArr[rightInd]);
            rightInd++;
        }
    }


  return result.concat(leftArr.splice(leftInd)).concat(rightArr.splice(rightInd));
}

const arr = [5,9,16,3,2,7,2,90,9,8,4];
const result = mergeSort(arr);
console.log(result);