

let arr = [3, 8, 7, 2, 5, 9, 13, 11, 90, 67];


/* for(let i = 0; i< arr.length; i++){
   for(let j=0; j< arr.length;j++){
     if(arr[j] > arr[j+1]){
       const temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
     }
   }
}
 */



function quick(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quick(leftArr), pivot, ...quick(rightArr)];
}

/* console.log(arr); */


function binaySearch(arr,target){
  
  let left = 0;
  let right = arr.length -1;
    
  while(left <= right){
     let mid = Math.floor((left+right) / 2);
     if(arr[mid] === target){
       return mid;
     }
      else if(arr[mid] < target){
       left = mid + 1 ;
     }else{
      right =  mid - 1;
     }
  }
  
  return -1;
}


function secondLargest(arr){

   let first = -Infinity;
   let second = -Infinity;
   
   for(let num of arr){
     if(num > first){
        second = first;
        first = num;
     }else if(num > second && num !== first ){
       second = num;
     }
   }
   
   return second;
    
}


function  thirdLargest(arr){

   let first = -Infinity;
   let second = -Infinity;
   let third = -Infinity;
   
   for(let num of arr){
     if(num > first){
         third = second; 
        second = first;
        first = num;
     }else if(num > second && num !== first ){
       third = second; 
       second = num;
     }else if (num > third && num !== second && num !== first){
         third = num;
     }
   }
   
   return third;
}



function findMax (arr) {
   let maxNum = arr[0];
     for(let num of arr){
        if(num > maxNum ){
         maxNum = num
        }
     }
     return maxNum;
}     

const val = quick(arr);
console.log(val);
/* 
const target = binaySearch(val,11);
console.log(`${target < 0 ? 'not found': target}`);
const second = secondLargest(arr);
console.log(second);

 */
 
 
 const tLar =thirdLargest(arr);
 console.log(tLar)
 
/*  const fMax = Math.max(...arr);
 console.log(fMax)
 
 
 const maxNum = findMax(arr);
 console.log(maxNum); */

