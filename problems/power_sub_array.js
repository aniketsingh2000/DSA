function powerSum(array, power) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            result = result +  Math.pow(powerSum(array[i], power+1), power+1);
        } else {
            result = result + array[i];
        }
      }
      return result 
    }
    
    
    const arr = [1, 2, [7, [3, 4], 2]];
    const answer = powerSum(arr,1);
    console.log(answer);
    