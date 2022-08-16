/**
 * Given an integer n find the factorial of that integer
 */

const factorialRecursive = (n) => {
    if(n === 1) return 1

    return n * factorialRecursive(n-1);
}

console.log(factorialRecursive(1));
console.log(factorialRecursive(5));

/**
 * Time complexity 0(n)
 * 
 * space complexity 0(1)
 */