
// 51. N-Queens
// Solved
// Hard
// Topics
// Companies
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

 

// Example 1:


// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
// Example 2:

// Input: n = 1
// Output: [["Q"]]



var solveNQueens = function(n) {

    let result = [];
    let board = Array.from({length: n }, () => Array(n).fill("."));
  
  
    var isSafe = function(board, row, col) {
      for (let i = 0; i < row; i++) {
        if (board[i][col] === "Q") return false;
      }
  
      for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === "Q") return false;
      }
  
      for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === "Q") return false;
      }
  
      return true;
  
    }
  
  
    var placeQueen = function(row) {
  
      if (row === n) {
        result.push(board.map(r => r.join('')));
        return
      }
  
      for (let col = 0; col < n; col++) {
        if (isSafe(board, row, col)) {
           board[row][col] = "Q";
           placeQueen(row + 1);
           board[row][col] = "."; 
        }
      }
    }
    placeQueen(0);
  
  
    return result;
  };
  