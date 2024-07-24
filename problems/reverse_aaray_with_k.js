function rotate (arr,k) {
    const n = arr.length;
    k %= n ;
    console.log(k);
    
    
    const reverseArray = (arr,start,end) => {
    while(start < end ){
      [ arr[start], arr[end]] = [arr[end],arr[start]];
      start++;
      end--;
     }
    } 
    
   reverseArray(arr,0,n-1)
   reverseArray(arr,0,k-1)
   reverseArray(arr,k,n-1)
 
 }
 
 
 // Example usage:
 let nums = [1, 2, 3, 4, 5, 6, 7];
 let k = 3;
 rotate(nums, k);
 console.log(nums); 