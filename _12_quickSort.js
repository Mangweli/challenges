/**
 * Given an array of integers, sort the array. //Worst poor performing
 * 
 * const arr = [-6, 20, 8, -2, 4]
 * bubbleSort(arr) => Should return [-6, -2, 4, 8, 20]
 * 
 */

const quickSort = (arr) => {

    if(arr.length < 2) {
        return arr;
    }

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

  //  console.log(leftArr, rightArr, pivotElement);

    return [...quickSort(leftArr), pivotElement, ...quickSort(rightArr)];
}

console.log(quickSort([-6, 20, 8, -2, 4]));