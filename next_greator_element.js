function nextGreaterElement(arr) {
    const result = new Array(arr.length).fill(-1); // Initialize result array with -1
    const stack = []; // Stack to store indices

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i], arr[stack[stack.length - 1]], stack[stack.length - 1])
        while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
            result[stack.pop()] = arr[i];
        }
        stack.push(i);

    }

    return result;
}

const arr1 = [1, 4, 5, 2, 3];
const arr2 = [ 38,4,3,9,20,10,6,12,7,30 ];
console.log("Next Greater Element:", nextGreaterElement(arr2)); // Output: [4, 5, -1, 3, -1]




// function nextGreaterElement(arr) {
//     const result = new Array(arr.length).fill(-1);
//     const stack =  [];
     
//     for(let i =0; i <arr.length; i++){
//        while(stack.length && arr[i] > arr[stack[stack.length -1]]){
//             result[stack.pop()] = arr[i]
//        }
//        stack.push(i);

//     }

//     return result;
// }

// const arr = [ 4,8,9,20,10,12,7,3 ];
// console.log(nextGreaterElement(arr));