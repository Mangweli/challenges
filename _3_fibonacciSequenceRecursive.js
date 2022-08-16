const recursiveFibonacciSequence = (n) => {
    let results = [0, 1];
    let i       = 2;

    if( results.length >= 2 && results.length <= n) {
        recursiveFibonacciSequence(n);
    }

    return results;
}