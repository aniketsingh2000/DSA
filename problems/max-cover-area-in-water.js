// Container with most Water - You are given an integer array height of length n. 
// There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). 
// Find two lines that together with the x-axis form a container, such that the container contains the most water(depth is constant across containers).
// Return the area(that the 2 lines and the X axis make) of container which can store the max amount of water. 
// Notice that you may not slant the container.



function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        // Calculate the current area
        const width = right - left;a
        const currentHeight = Math.min(height[left], height[right]);
        const currentArea = width * currentHeight;

        // Update maxArea if the current area is greater
        if (currentArea > maxArea) {
            maxArea = currentArea;
        }

        // Move the pointer pointing to the shorter line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}



const arr = [1, 5, 6, 3, 4];
const result = maxArea(arr);
console.log(result);
