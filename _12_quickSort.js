/**
 * Given an array of integers, sort the array. //Worst poor performing
 * 
 * const arr = [-6, 20, 8, -2, 4]
 * bubbleSort(arr) => Should return [-6, -2, 4, 8, 20]
 * 
 */

const quickSort = (arr) => {
    let leftArr      = [];
    let rightArr     = [];
    let pivotElement =  arr[arr.length-1];

   // console.log(arr.length-2, arr[arr.length-2]);

    for(let i = 0; i < arr.length-1; i++) {
       
        if(arr[i] <= pivotElement) {
            leftArr.push(arr[i]);
        }

        if(arr[i] > pivotElement) {
            rightArr.push(arr[i]);
        }
    }

    while(leftArr.length > 0)

    console.log(leftArr, rightArr, pivotElement);

    return true;
}

const splitArr = (arr) => {
    let leftArr      = [];
    let rightArr     = [];
    let pivotElement =  arr[arr.length-1];

    for(let i = 0; i < arr.length-1; i++) {
       
        if(arr[i] <= pivotElement) {
            leftArr.push(arr[i]);
        }

        if(arr[i] > pivotElement) {
            rightArr.push(arr[i]);
        }
    }
    
    return [leftArr, rightArr];
}

console.log(quickSort([-6, 20, 8, -2, 4]));