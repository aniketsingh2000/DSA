var generateMatrix = function(matrix) {
    if (matrix < 0) return [];
  
    let result = new Array(matrix).fill().map(item => new Array(matrix).fill(''));
    let top = 0;
    let bottom = matrix - 1;
    let left = 0;
    let right = matrix - 1;
    let count = 0
  
  
    while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++) {
        count++
        result[top][i] = count;
      }
      top++;
  
      for (let i = top; i <= bottom; i++) {
        count++
        result[i][right] = count;
      }
      right--;
  
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          count++
          result[bottom][i] = count;
        }
        bottom--;
      }
  
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          count++
          result[i][left] = count;
        }
        left++;
      }
  
    }
      return result;
  }