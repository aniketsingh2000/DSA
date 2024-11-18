// Coding Exercise: Number of Islands
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.








var numIslands = function(grid) {

    if(grid.length === 0) return 0;
    const numRows = grid.length;
    const numCols = grid[0].length;
    let islandCount = 0;
     
     
     
     const dfs = function(i,j){
         if(i<0 || i>= numRows || j< 0 || j>= numCols || grid[i][j] === 0) {
             return;
         }
         
         grid [i][j] = 0;
         
         dfs(i-1,j);
         dfs(i+1,j);
         dfs(i,j-1);
         dfs(i,j+1);
     }
     
     for(let i=0; i< numRows; i++){
         for(let j=0; j < numCols; j++){
            if(grid[i][j] === 1) {
                islandCount++;
                
                dfs(i,j);
            }
             
         }
     }
     
     
     return islandCount;    
        
    };
    
    
    const grid = [
    [0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0]
      ]
    console.log(numIslands(grid));