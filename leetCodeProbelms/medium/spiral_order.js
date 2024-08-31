var spiralOrder = function(matrix) {
    if (matrix.length === 0) return [];
  
    let result = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;
  
    while (top <= bottom && left <= right) {
      // Traverse from left to right along the top row.
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++; // Move the top boundary down.
  
      // Traverse from top to bottom along the right column.
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--; // Move the right boundary left.
  
      // Traverse from right to left along the bottom row.
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          result.push(matrix[bottom][i]);
        }
        bottom--; // Move the bottom boundary up.
      }
  
      // Traverse from bottom to top along the left column.
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          result.push(matrix[i][left]);
        }
        left++; // Move the left boundary right.
      }
    }
  
    return result;
  };
  
  const matrix = [[2, 5, 8], [4, 0, -1]];
  console.log(spiralOrder(matrix));