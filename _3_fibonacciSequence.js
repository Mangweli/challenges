/**
 * Given a number n find the first n elements of the fibonacci sequence
 * 
 * The fibonacci sequence is a sequence in which each number is the sum of the two preceding ones
 * The first two numbers in the sequence are 0 and 1
 * fibonacci(2) = [0, 1]
 * fibonacci(3) = [0, 1, 1]
 * fibonacci(7) = [0, 1, 1, 2, 3, 5, 8]
 * */

const fibonacci = (n) => {
    if(n < 2 ) return false;

    let sequence = [0, 1];

    if(n < 3 ) return sequence;

    for(let i = 2; i <= n; i++) {
        sequence.push(sequence[sequence.length - 1] +  sequence[sequence.length - 2]);
    }

    return sequence;
}

console.log(fibonacci(2));  // [0, 1]
console.log(fibonacci(3)); // [0, 1, 1]
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]

/**
 * Time complexity 0(n)
 * 
 * space complexity 0(1)
 */