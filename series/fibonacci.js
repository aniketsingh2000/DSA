
// Fibonacci Series List
// F0 = 0	F10 = 55
// F1 = 1	F11 = 89
// F2 = 1	F12 = 144
// F3 = 2	F13 = 233
// F4 = 3	F14 = 377
// F5 = 5	F15 = 610
// F6 = 8	F16 = 987
// F7 = 13	F17 = 1597
// F8 = 21	F18 = 2584
// F9 = 34	F19 = 4181


function fibonacci(num) {
    let result = [];
    let n1 = 0;
    let n2 = 1;
    let nextTerm = 0;

    for (let i = 0; i <=num; i++) {
        result.push(nextTerm);
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n2 + n1;
    }

    return result
}

const num = 10;
console.log(fibonacci(num));