const binarySearch = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (target === nums[mid]) {
        return mid;
      } else if (nums[left] <= nums[mid]) {
        if (target >= nums[left] && target < nums[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        if (target <= nums[right] && target > nums[mid]) {
          left = mid + 1;;
        } else {
          right = mid - 1;
        }
      }
    }
  
    return -1;
  
  }
  
  let arr = [17, 2, 6, 8, 7, 9, 10, 11, 14];
  let target = 17;
  
  console.log(binarySearch(arr, target))
  