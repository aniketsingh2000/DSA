const adjancyList = {
    'A': ['B', 'F'],
    'B': ['A', 'C'],
    'C': ['B', 'E', 'D'],
    'D': ['C', 'E'],
    'E': ['D', 'C', 'F'],
    'F': ['A', 'E']
};


const travDFS = function (graph, start, output, visited) {

    if (!visited[start]) {
        visited[start] = true;
        output.push(start);

        for (let near of graph[start]) {
            if (!visited[near]) {
                travDFS(graph, near, output, visited);
            }
        }
    }

    return output;
}


console.log(travDFS(adjancyList, 'A', [], {}));



const travIterativeDFS = function (graph, start) {
    let output = [];
    let visited = {};
    let stack = [start];
    while (stack.length > 0) {
        visited[start] = true;
        const item = stack.pop();
        output.push(item);

        for (let neabour of graph[item]) {
            if (!visited[neabour]) {
                stack.push(neabour);
                visited[neabour] = true;
            }
        }
    }


    return output;
}



console.log(travIterativeDFS(adjancyList, 'A'));