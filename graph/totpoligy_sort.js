
// In the topoligy sort it check weather the grap have cycle or not if graph have cycle then it should return false, oterwise true 

const helper = function(n, prerecs){
    const adjList = new Array(n).fill(0).map(() => []);
    const inDegree = new Array(n).fill(0);
    for(let prerec of prerecs){
        const [toTake, firstTake] = prerec;
        adjList[firstTake].push(toTake);
        inDegree[toTake]++;
    }
    return [adjList,inDegree];
}

const checkIfCanFinish = function(n, prerecs){
    const stack = [];
    const [adjList, inDegree] = helper(n,prerecs);
    for(let i=0; i<n;i++){
        if(inDegree[i]===0) stack.push(i);
    }
    let count=0;
    while(stack.length){
        const current = stack.pop();
        count++;
        const neighbours = adjList[current];
        for(let i =0;i < neighbours.length; i++){
            const neighbour =  neighbours[i];
            inDegree[neighbour]--;
            if(inDegree[neighbour] === 0) stack.push(neighbour);
        }
    }
    
    return count === n;
}


const n= 5;
const p = [[2,0],[1,0],[2,1],[2,4],[3,2],[4,3]];

console.log(checkIfCanFinish(n,p));