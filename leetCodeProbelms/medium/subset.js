var subsets = function(nums) {
    let result = [];
    let n = nums.length;
    let totalSubsets = 1 << n; 
    for (let i = 0; i < totalSubsets; i++) {
        let subset = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                subset.push(nums[j]);
            }
        }
        result.push(subset);
    }

    return result;
};
