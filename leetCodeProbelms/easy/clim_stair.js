function climbStairs(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    
    let oneStepBefore = 2; 
    let twoStepsBefore = 1;
    let allWays = 0;

    for (let i = 3; i <= n; i++) {
        allWays = oneStepBefore + twoStepsBefore; 
        twoStepsBefore = oneStepBefore; 
        oneStepBefore = allWays; 
    }

    return allWays; 
}