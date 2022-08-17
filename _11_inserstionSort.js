/**
 * Given an array of integers, sort the array. //Worst poor performing
 * 
 * const arr = [-6, 20, 8, -2, 4]
 * bubbleSort(arr) => Should return [-6, -2, 4, 8, 20]
 * 
 */const insertionSort = (arr) => {
    for(let i = 1 ; i<arr.length -1; i++) {
        let valueToInsert    = arr[i];
        let sortedValueIndex = i - 1;

        while(sortedValueIndex >= 0 && arr[sortedValueIndex] > valueToInsert) {
            arr[sortedValueIndex + 1] = arr[sortedValueIndex];
            sortedValueIndex      -= 1;
        }

        arr[sortedValueIndex + 1] = valueToInsert
    }

    return arr;
 }

 console.log(insertionSort([-6, 20, 8, -2, 4]));

 /**
 * Time complexity 0(n squared)
 * 
 * space complexity 0(1)
 */