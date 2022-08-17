/**
 * Given an array of integers, sort the array. //Worst poor performing
 * 
 * const arr = [-6, 20, 8, -2, 4]
 * bubbleSort(arr) => Should return [-6, -2, 4, 8, 20]
 * 
 */

const bubbleSort = (arr) => {
    let currentValue = "";
    let isShifted;
   
    do {
        isShifted    = false;
        for(let i = 0; i < arr.length-1; i++ ) {
            if(arr[i] > arr[i+1]) {
                currentValue = arr[i];
                isShifted = true;
                arr[i]    = arr[i+1];
                arr[i+1]  = currentValue;
                console.log(arr);
            }

        console.log(isShifted);
        }
    } while(isShifted)
   

  // if(isShifted) return bubbleSort(arr); // use recursive or do while

    return arr;
}

console.log(bubbleSort([-6, 20, 8, -2, 4]));

/**
 * Time complexity 0(n squared)
 * 
 * space complexity 0(1)
 */