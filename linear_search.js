function linearSearch(arr, target) {
    let results = "None";

    if(arr.length < 1)
        return results;

    for(let index = 0; index < arr.length; index++)
        if(arr[index] == target)
            return index;

    return results;
}

function binarySearch(arr, target) {
    let first   = 0;
    let last    = arr.length - 1;
    let results = false;

    while (first <= last) {
        let middlePoint = Math.floor((first + last)/2);

        if(arr[middlePoint] == target)
            return middlePoint;
        
        if(arr[middlePoint] <= target) 
            first = middlePoint + 1;
        else
            last = middlePoint - 1;
    }
    return results;
}

function recursiveBinarySearch(arr, target) {
    console.log(arr);
    if(arr.length < 1) return false;

    let middlePoint = Math.floor(arr.length/2);

    if (arr[middlePoint] == target) return true;

    if(arr[middlePoint] <= target)
        return recursiveBinarySearch(arr.slice(middlePoint + 1), target);
    else
        return recursiveBinarySearch(arr.slice(0, middlePoint), target);
}

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
 
//console.log(linearSearch(numbers, 8));
//console.log(binarySearch(numbers, 8));
console.log(recursiveBinarySearch(numbers, 18));
