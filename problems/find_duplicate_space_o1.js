function findDuplicate(arr) {
    let hare = 0;
    let tortoise = 0;
  
    while (true) {
      hare = arr[arr[hare]];
      tortoise = arr[tortoise];
  
      if (hare === tortoise) {
        let pointer = 0;
        while (pointer !== tortoise) {
          pointer = arr[pointer];
          tortoise = arr[tortoise];
        }
        return pointer;
      }
    }
  }
  
  
  let arr = [1, 2, 3, 5, 6, 7, 3];
  console.log(findDuplicate(arr));
  
  
  const getDuplicate = function(nums) {
    let hare = 0;
    let tortoise = 0;
    while (true) {
      hare = nums[nums[hare]];
      tortoise = nums[tortoise];
      if (hare === tortoise) {
        let pointer = 0;
        while (pointer !== tortoise) {
          pointer = nums[pointer]
          tortoise = nums[tortoise]
        }
        return pointer;
      }
    }
  }
  console.log(getDuplicate([4, 3, 1, 2, 3]));
  