/**
 * 
 * Given an array of n elements and a target element t, find the index of t in the array. Return -1 if the target element is not found
 * 
 * 
 */

const linearSearch = (n, t) => {
    for(let i = 0; i <= n.length; i++) {
        if(n[i] === t) return i;
    }
    return -1;
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10));
console.log(linearSearch([-5, 2, 10, 4, 6], 6));
console.log(linearSearch([-5, 2, 10, 4, 6], 20));

/**
 * Time complexity 0(n)
 * 
 * space complexity 0(1)
 */