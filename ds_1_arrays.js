const arr = [1, 2, 3, 4];
const arr2 = [2, 3, 5, 7];
const  arr3= arr.concat(arr2);
console.log(arr3);

const arr4 = arr3.slice(0,5);
const arr5 = arr3.slice(5);

console.log(arr4);
console.log(arr5);

arr.push(5);
arr.unshift(0);
arr.pop()
arr.shift()

for(const items of arr) {
    console.log(items);
}

console.log("-------------------------")

console.log(arr.map((num, index, test)=> {
    // console.log(index, num, test);
    // console.log(num > 2)
    return num * 10
}));

console.log("-------------------------")

console.log(arr.filter((num, index, test) => {
    // console.log(index, num, test);
    // console.log(num > 2)
    return num > 2
}))
console.log("-------------------------")

arr.reduce((prev, current) => {
    console.log("prev - "+prev, "current - "+current)
    return 
});

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits);

fruits.splice(2, 2, "Grapes");
console.log(fruits);

fruits.splice(2, 2);
console.log(fruits);

