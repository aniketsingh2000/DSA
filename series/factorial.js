// Factorials of Numbers 1 to 10 Table
// The list of factorial values from 1 to 10 are:

// n

// Factorial of a Number

// n!

//          Expansion	
// Value

// 1	1!	1	1
// 2	2!	2 × 1	2
// 3	3!	3 × 2 × 1	6
// 4	4!	4 × 3 × 2 × 1	24
// 5	5!	5 × 4 × 3 × 2 × 1	120
// 6	6!	6 × 5 × 4 × 3 × 2 × 1	720
// 7	7!	7 × 6 × 5 × 4 × 3 × 2 × 1	5,040
// 8	8!	8 × 7 × 6 × 5 × 4 × 3 × 2 × 1	40,320
// 9	9!	9 × 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1	362,880
// 10	10!	10 × 9 ×8 × 7 × 6 × 5 ×4 × 3 × 2 × 1	3,628,800



function factorial(num, result) {
    if (num === 0) {
        return result;
    } else {
        result = result * num;
    }
    return factorial(num - 1, result)
}

const num = 5;
console.log(factorial(num, 1));


console.log("---------------------")


function factorialWay2(num) {
    if (num === 0) {
        return num
    }

    let result = 1;
    for (let i = num; i > 0; i--) {
        result = result * i;
    }

    return result;

}

const num1 = 5;
console.log(factorialWay2(num1));