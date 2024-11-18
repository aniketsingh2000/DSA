// Coding Exercise: Find if path exists in Graph
// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

// You want to determine if there is a valid path that exists from vertex source to vertex destination.

// Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.






var validPath = function(n, edges, source, destination) {

    const graph = Array.from({ length:n }, () => []);
    
    for(let [u,v] of edges){
        graph[u].push(v);
        graph[v].push(u);
    }
    
    const visited = new Array(n).fill(false);
    
    const dfs = function(node){
        if(node === destination) return true;
        visited[node] = true;
        
        for(let neighbour of graph[node]){
            if(!visited[neighbour]) { 
                if(dfs(neighbour)) return true;
            }
        }
        
        return false;
    }
    
    return dfs(source);
        
    };
    
    const n = 5;
    const edges = [[0, 1], [0, 2], [1, 2], [2, 3], [3, 4], [2, 4]];
    const source = 0;
    const destination = 4;
    
    console.log(validPath(n,edges,source,destination));