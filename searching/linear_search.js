// What is Linear Search?
// Linear search is a simple searching algorithm that sequentially checks each element in a collection (such as an array) until the target element is found or the end of the collection is reached. It works for both sorted and unsorted arrays.

// Why Linear Search?
// Linear search is straightforward to implement and easy to understand. It is suitable for small collections or when the data is unordered. Although it's not the most efficient algorithm for large datasets, it's still useful in scenarios where the overhead of sorting the data for more efficient algorithms like binary search isn't justified.

// Where is it used?
// Linear search can be used in scenarios where:
// The dataset is small.
// The dataset is unsorted.
// A quick implementation is needed without much overhead.
// The dataset is frequently modified, and sorting it would be inefficient.

// Real-life Example:
// Consider the task of searching for a specific book in a library. You enter the library and start scanning each shelf one by one until you find the book you're looking for. This process of sequentially checking each book until the target book is found is analogous to linear search.

// code example 


function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}


const arr = [5, 3, 8, 2, 9, 4];
const target = 3;
const result = linearSearch(arr, target)

console.log(`Target Index ${result < 0 ? 'Not Found' : 'Found (' + result + ')'}`,)