function getMax(arr) {
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return max
  }
  
  
  
  function countSort(arr, exp) {
    let n = arr.length;
    let output = new Array(n).fill(0);
    let count = new Array(10).fill(0);
  
  
  // Count occurrences of digits
    for (let i = 0; i < n; i++) {
      const index = Math.floor(arr[i] / exp) % 10;
      count[index]++;
    }
  
   // Update count array
    for (let i = 1; i < 10; i++ ){
    count[i] += count[i-1];
    }
    
   // Build the output array
    for(let i = n-1; i>=0; i--){
    const index = Math.floor(arr[i] / exp) % 10;
    output[count[index]-1] =arr[i];
    count[index]--;
    }
    
    /* or(let i=0; i<n;i++){
    arr[i] = output[i]  
    } */
    
    return output;
    
  }
  
  
  function radixSort(arr) {
    const max = getMax(arr);
  
  
    let sortedArr = [...arr]
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
      const sortArr = countSort(sortedArr, exp);
      sortedArr = sortArr
    }
  
    return sortedArr;
  }
  
  const arr = [170, 45, 75, 90, 802, 24, 2, 66];
  console.log(radixSort(arr));
  