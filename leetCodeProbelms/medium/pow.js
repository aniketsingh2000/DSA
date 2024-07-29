function pow(x, n) {
    function fastPow(y, m) {
        if (m === 0) {
            return 1.0;
        }
        let half = fastPow(y, Math.floor(m / 2));
        if (m % 2 === 0) {
            return half * half;
        } else {
            return half * half * y;
        }
    }

    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    return fastPow(x, n);
}

// Example 1
let x1 = 2.00000;
let n1 = 10;
console.log(pow(x1, n1));  // Output: 1024.00000

// Example 2
let x2 = 2.10000;
let n2 = 3;
console.log(pow(x2, n2));  // Output: 9.26100

// Example 3
let x3 = 2.00000;
let n3 = -2;
console.log(pow(x3, n3));  // Output: 0.25000
