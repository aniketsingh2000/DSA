const vertices = ['A', 'B','C','D','E','F'];
const vertexIndices ={
'A':0,
'B':1,
'C':2,
'D':3,
'E':4,
'F':5
}
const adjacencyMatrix = [
[0,1,0,0,0,1],
[1,0,1,0,0,1],
[0,1,0,1,1,0],
[0,0,1,0,1,0],
[0,0,1,1,0,1],
[1,1,0,0,1,0]
]



const travBSF = function (graph,start){
    let output = [];
    let visited = {};
    const queue = [start]; 
    visited[start] = true;
    let current, currentInd;
    
    while(queue.length>0){
        current = queue.shift();
        output.push(current);
        currentInd = vertexIndices[current];
        const neighbours = graph[currentInd];
        
     for(let i =0; i < neighbours.length; i++ ){
            if(neighbours[i]===1 && !visited[vertices[i]]){
                queue.push(vertices[i]);
                visited[vertices[i]] = true;
            }
        }
    }
    
    return output;
}

console.log(travBSF(adjacencyMatrix,'A'));