/**linear search

Javascript code to linearly search x in arr[]. If x
is present then return its location, otherwise
return -1

**/

function search(arr, x) {
    for (let index = 0; index < arr.length; index++) 
        if(arr[index] == x) return index;

    return -1;
}

let arr = [100, 10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
var x = 110;
var x = 175;

console.log(search(arr, x));

