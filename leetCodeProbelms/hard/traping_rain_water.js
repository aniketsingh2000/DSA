
var trap = function (height) {

    if (!height.length) return 0;

    let left = 0;
    let right = height.length - 1;
    let leftMax = height[left];
    let rightMax = height[right];
    let totalwater = 0;


    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            totalwater += leftMax - height[left];
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            totalwater += rightMax - height[right];
        }
    }

    return totalwater;

};


// const height = [4,2,0,3,2,5]

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height))
