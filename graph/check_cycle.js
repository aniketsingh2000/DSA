// Brute force method  



const buildAdjList = function(n,preces){
    const adjList = new Array(n).fill(0).map(()=>[]);
    for(let precec of preces){
        const [toTake, firstTake] = precec;
        adjList[firstTake].push(toTake);
    }
    return adjList;
}


const checkCycleBFS = function(vertex, graph) {
    const queue = [];
    const visited = {};
    for(let i=0; i<graph[vertex].length; i++){
        queue.push(graph[vertex][i]);
    }
    while(queue.length){
        const cur = queue.shift();
        visited[cur] = true;
        if(cur === vertex) return true;
        const neghbours = graph[cur];
        for(let neghbour of neghbours){
            if(!visited[queue]){
                queue.push(neghbour);
            }
        }
    }
    return false;
}

const checkIfCanFinish = function(n,prerecs){
    const adjList = buildAdjList(n,prerecs);
    console.log(adjList)
    let hasCycle;
    for(let vertex =0; vertex<n; vertex++){
        hasCycle = checkCycleBFS(vertex,adjList);
        if(hasCycle) return false; 
    }
    return true;
}


let n = 7;
let prerecs = [[1,0],[2,0],[2,1],[3,2],[5,4],[6,5],[4,6]];
console.log(checkIfCanFinish(n,prerecs));