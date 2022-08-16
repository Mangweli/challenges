/**
 * Given a sorted array of n elemts and a target element t. find the index of t in the array
 * Return -1 if the target element is not found
 */

const binarySearch = (n, t) => {
    let first  = 0;
    let last   = n.length -1;

    while(first <= last) {
        let middle = Math.floor((first + last)/2);

        if(n[middle] === t) {
            return middle;
        }

        if(n[middle] < t) {
            first = middle + 1;
        }else{
            last = middle -1 ;
        }
    }

     return -1;
}  


console.log(binarySearch([-5, 2, 4, 6, 10], 10));
console.log(binarySearch([-5, 2, 4, 6, 10], 6));
console.log(binarySearch([-5, 2, 4, 6, 10], 20));

/**
 * Time complexity 0(logn)
 * 
 * space complexity 0(1)
 */