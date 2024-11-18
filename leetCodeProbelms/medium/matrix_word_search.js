
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

// Example 1:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false



var exist = function(board, word) {
    let m = board.length;
    let n = board[0].length;


  function dfs(r,c,index){
      if(index === word.length) return true;
      
      if(r<0 || c < 0 || r >=m || c>= n || board[r][c] !== word[index]) return false;
      
      const temp = board[r][c];
      board[r][c] = "#";
      
      const found = dfs(r+1,c,index+1) || dfs(r-1,c,index+1) ||
                    dfs(r,c+1,index+1) || dfs(r,c-1,index+1);

   board[r][c] = temp;
        return found;
  }
    
    for(let i=0; i<m;i++ ){
        for(let j=0; j < n; j++){
         if (dfs(i, j, 0)) return true; 
        }
    }
    
    return false;
};

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
const word = 'SEE';

console.log(exist(board, word));