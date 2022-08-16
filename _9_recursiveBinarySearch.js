/**
 * Given a sorted array of n elemts and a target element t. find the index of t in the array
 * Return -1 if the target element is not found
 */

const recursiveBinarySearch = (arr, t) => {
    if(arr.length < 1) {
        return -1;
    }

    let midPoint = Math.floor(arr.length/2);

    if(arr[midPoint] === t) return midPoint;

    if(arr[midPoint] < t) {
        return recursiveBinarySearch(arr.slice(midPoint+ 1), t);
    }else {
        return recursiveBinarySearch(arr.slice(0, midPoint), t);
    }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20));

/**
 * Time complexity 0(logn)
 * 
 * space complexity 0(1)
 */