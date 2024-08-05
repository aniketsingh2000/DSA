function findValidSudko(arr) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());


  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {

      const value = arr[i][j];

      if (value === '.') continue;

      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      
      if (rows[i].has(value) || cols[j].has(value) || boxes[boxIndex].has(value)) {
        return false;
      }
      rows[i].add(value);
      cols[j].add(value);
      boxes[boxIndex].add(value);
    }
  }
  
  return true;
}


const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "3", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

console.log(findValidSudko(board));
