/**
 * Given an integer 'n', find the factoriall of that integer.
 * 
 * The factorial of a non-negative integer 'n', denoted by n!, is the product of all positive integers less than or equal to 'n'.
 * Factorial of Zero is 1;
 * 
 * factorial(4) = 4*3*2*1 = 24
 * factorial(5) = 5*4*3*2*1 = 120
 * 
 */

const factorial = (n) => {
    if(n < 0) return false;
    if(n == 0) return 1

    let results = 1;

    for(let i = n; i >= 1; i--) {
        results *= i;
    }
    return results;
}

console.log(factorial(0)); //1
console.log(factorial(1)); // 1
console.log(factorial(4)); // 24
console.log(factorial(5)); //120

/**
 * Time complexity 0(n)
 * 
 * space complexity 0(1)
 */