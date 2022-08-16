/**
 * Given a positive integer 'n, determine if the number is a power of 2 or not.
 * 
 * An integer is a power of two if there exists an interger 'x'such that 'n' === 2powerx
 * 
 * isPowerOfTwo(1) = true(2power0)
 * isPowerOfTwo(1) = true(2power1)
 * isPowerOfTwo(1) = false
 * 
 */

const isPowerOfTwoBitwise = (n) => {
    if(n < 1) return false;

    return (n & (n-1)) === 0
} 


/** 
 * n=8
 * 8/2 = 4 (reminder 0)
 * 4/2 = 2 (reminder 0)
 * 2/2 = 1 (reminder 0)
 * 
 * if reminder is not 0 in any step, n is not a power of two
 * 
 * if reminder is 0 and n comes down to 1 eventually n is a power of two
 * */
const isPowerOfTwo = (n) => {
    if(n < 1) return false;

    while(n > 1) {
        if(n%2 !== 0) return false

        n = n/2
    }

    return true
}
console.log(isPowerOfTwo(1)); //true
console.log(isPowerOfTwo(2)); //true
console.log(isPowerOfTwo(5)); //false
console.log(isPowerOfTwo(6)); //false
console.log(isPowerOfTwo(8)); //true

console.log('-----------BITWISE----------');
console.log(isPowerOfTwoBitwise(1)); //true
console.log(isPowerOfTwoBitwise(2)); //true
console.log(isPowerOfTwoBitwise(5)); //true
console.log(isPowerOfTwoBitwise(6)); //true
console.log(isPowerOfTwoBitwise(8)); //true

/**
 * Time complexity 0(log n)
 * 
 * space complexity 0(1)
 */