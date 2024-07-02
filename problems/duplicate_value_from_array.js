function findDuplicate(arr) {
    let result = new Map();
    let duplicateSet = new Set();
    let duplicateArr = [];
    let dupObj = {}
    
    for (let i = 0; i < arr.length; i++) {
       if (result.has(arr[i])) {
             dupObj[arr[i]] =  dupObj[arr[i]] > 0 ? dupObj[arr[i]]+ 1 : 2;
            if (!duplicateSet.has(arr[i])) {
                duplicateSet.add(arr[i]);
                duplicateArr.push(arr[i]);
            }
        }
        result.set(arr[i], i);
    }
    console.log(dupObj);
    return duplicateArr;
}

const arr = [0, 1, 2, 4, 8, 2, 4, 9, 9, 1, 2,2, 3, 2, 1, 1, 9];
console.log(findDuplicate(arr)); // Output: [2, 4, 1, 9]
