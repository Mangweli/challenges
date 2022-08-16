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

// (e.g., hash maps, arrays, binary trees, algorithms). Your evaluation will include three areas of coding: data structures and algorithms, logical and maintainable, and problem-solving. 

function encode(characters) {
    if(characters.length < 1) return "";

    let previousValue = '';
    let counter       = 0;
    let results       = '';

    let characterSet = [...characters];

    characterSet.forEach((value) => {
        counter++;
        
        console.log("currrent",value);
        console.log("Previous",previousValue);
        console.log(counter);

        //console.log(previousValue.length);

        if(previousValue == value)
            counter++;
        else
            if(previousValue != '')
                results = results+counter+previousValue;
            counter = 1;
            previousValue = value;

        
    //     if(previousValue != value) {
    //         results = results+counter+previousValue;
    //        // console.log("hello");
    //         counter = 1;
    //     } 

    //    // results += counter+previousValue;
           
    //     //console.log("Counter",results);
    //     previousValue = value;

    });

    console.log(results);
}

let chard = 'abbbcc';
encode(chard);


// let arr        = [...encode];



// console.log(encode.split(''));
// console.log(arr);

