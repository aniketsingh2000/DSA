function searchRange(nums, target) {

    function search(nums, target, firstPosition) {
  
      let left = 0;
      let right = nums.length - 1;
      let position = 0;
  
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
  
        if (nums[mid] === target) {
          position = mid
         if (firstPosition) {
                      right = mid - 1; // Continue searching in the left half
                  } else {
                      left = mid + 1; // Continue searching in the right half
                  }
  
        } else if (nums[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
  
      }
      return position
  
  
    }
  
    const firstValue = search(nums, target, true);
    if (firstValue === -1) {
      return [-1, -1]
    }
  
    const secondValue = search(nums, target, false);
  
    return [firstValue, secondValue];
  
  }
  
  const arr = [1, 2, 3, 4, 4,4,4, 5, 6, 7, 8, 9];
  const target = 4;
  console.log(searchRange(arr, target));
  