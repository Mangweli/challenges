// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

const sum = (maxNumber) => {
    let total = 0;
    if(maxNumber < 1) return total;

    for(var i = 0; i < maxNumber; i++) {
        if(i%3 == 0 || i%5 == 0) {
            total += i;
        }
    }

    return total;
} 

console.log(sum(-10));

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']