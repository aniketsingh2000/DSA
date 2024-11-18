// Coding Exercise: Number of Provinces
// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.









const findCircleNum = function(isConnected){
    const n = isConnected.length;
    const visited = new Array(n).fill(false);
    let provinceCount = 0;

    
    const dfs = function (city) {
        for(let neighour = 0;neighour<n; neighour++){
            if(isConnected[city][neighour] === 1 && !visited[neighour]){
                visited[neighour]= true;
                dfs(neighour);
            }
        }
    }
    
    
    for(let city=0; city < n; city++){
        if(!visited[city]){
            provinceCount++;
            visited[city] = true;
            dfs(city);
        }
    }
    
    return provinceCount;
    
}

// const isConnected = [
//   [1, 1, 0, 0, 0],  // City 0 is connected to city 1
//   [1, 1, 1, 0, 1],  // City 1 is connected to city 0, 2, and 4
//   [0, 1, 1, 0, 0],  // City 2 is connected to city 1
//   [0, 0, 0, 1, 1],  // City 3 is connected to city 4
//   [0, 1, 0, 1, 1]   // City 4 is connected to city 1 and city 3
// ]

const isConnected = [
  [1, 0, 0, 0, 0],  // City 0 is only connected to itself
  [0, 1, 0, 0, 0],  // City 1 is only connected to itself
  [0, 0, 1, 0, 0],  // City 2 is only connected to itself
  [0, 0, 0, 1, 0],  // City 3 is only connected to itself
  [0, 0, 0, 0, 1]   // City 4 is only connected to itself
]

// const isConnected = [
//   [1, 1, 0],
//   [1, 1, 0],
//   [0, 0, 1]
// ];

const n = 4
console.log(findCircleNum(isConnected));


