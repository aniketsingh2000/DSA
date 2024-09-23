var searchMatrix = function(matrix, target) {    

    let n = matrix.length;
    let i = 0;
    
    while(i!=n && i <=n){
        const max = matrix[i].length;
        if(matrix[i][max-1] === target){
            return true;
        }else if(target > matrix[i][max-1]){
            i++;
        }else{
            return binarySearch(matrix[i],target);
        }
    }
    return false;
    };
    
    function binarySearch(arr,target){
     let left = 0;
     let right = arr.length;
     while(left <= right){
        const mid = Math.floor((left+right)/2);
    
        
        if(arr[mid] === target){
            return true;
        }else if(arr[mid] < target){
             left++;
        }else{
            right --;
        }
         
     }
     return false;
    }
    
    const matrix = [[1],[3]]
    const target = 3
    
    console.log(searchMatrix(matrix,target));