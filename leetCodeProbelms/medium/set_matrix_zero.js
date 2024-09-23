var setZeroes = function(matrix) {
    
    let rows = matrix.length;
    let cols = matrix[0].length;
    
    let rowIndexMap = []
    let colIndexMap = []
    
    for(let i =0; i < rows; i++){
        for(let j=0; j < cols;j++){
            if(matrix[i][j] === 0){
              rowIndexMap.push(i);
              colIndexMap.push(j);
            }
        }
    }
    
    for(let i=0; i<rowIndexMap.length; i++ ){
        for(let j=0; j< cols;j++){
            matrix[rowIndexMap[i]][j] = 0;
        }
    }
    
       for(let i=0; i<colIndexMap.length; i++ ){
        for(let j=0; j< rows;j++){
            matrix[j][colIndexMap[i]] = 0;
        }
    }
    
    return matrix;
    
    
};