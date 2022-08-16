const person = {
    firstName: 'Kingsley',
    lastName: 'Mangweli'
}

/**
 * Accessing, Inserting and Removing data in an object has a time complexity of 0(1)
 * 
 * Searching an a value in a object has a time Complexity of linear 0(1)
 * 
 * 
 * METHODS OF OBJECTS
 * 
 * object.keys returns an array of all the keys in an object with a time complexity of 0(n)
 * object.values returns an array of all the values in an object with a time complexity of 0(n)
 * object.entries retu
 */

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

/**
 * Arrays : arrays are ordered starting from index 0
 */

const odd = [1, 3, 5, 7, 9];

/**
 * Inserting and removing at the end of an array has a constant time complexity 0(1)
 * 
 * Inserting and removing at the begining of an array has a linear time complexity 0(n)
 * 
 * Accessing - 0(1)
 * 
 * Search - 0(n) 
 * 
 * ARRAY METHODS TIME COMPLEXITIES
 * 
 * pop, push - 0(1)
 * 
 * unshift, shift, concat, slice, splice - 0(n)
 * 
 * forEach, map, reduce, filter - 0(n)
 */

console.log(odd.shift(), odd); //Removes at the begining  - returns value that has been removed
console.log(odd.pop(), odd); //Removes at the end - returns value that has been removed
console.log(odd.unshift(2), odd);// Adds record at the begining of an array - returns size of array 
console.log(odd.push(11), odd);// Adds record at the begining of an array  returns size of array 