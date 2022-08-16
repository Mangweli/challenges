/**
 * Given a number n find the nth element of the Fibonacci Sequence
 */

const recursiveFibonacciSequence = (n, results = [0, 1]) => {
    if(n < 3) return results;

    if(results.length <= n) {
        results.push(results[results.length - 1] + results[results.length -2]);
        recursiveFibonacciSequence(n, results);
    }
    return results;
}

const recursiveFibonacciSequence2 = (n) => {
    if(n < 2) return n
    
    return recursiveFibonacciSequence2(n - 1) + recursiveFibonacciSequence2(n - 2);
}


console.log(recursiveFibonacciSequence(2)); // [0, 1]
console.log(recursiveFibonacciSequence(3)); // [0, 1, 1]
console.log(recursiveFibonacciSequence(7)); // [0, 1, 1, 2, 3, 5, 8]
console.log(recursiveFibonacciSequence(6)); // [0, 1]

console.log(recursiveFibonacciSequence2(2)); // [0, 1]
console.log(recursiveFibonacciSequence2(3)); // [0, 1, 1]
console.log(recursiveFibonacciSequence2(7)); // [0, 1, 1, 2, 3, 5, 8]
console.log(recursiveFibonacciSequence2(6)); // [0, 1]

/**
 * Time complexity 0(n)
 * 
 * 
 * space complexity 0(1)
 */