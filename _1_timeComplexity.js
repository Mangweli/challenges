function summation(n) {
    let sum = 0; //If n is 4 its executed 1 times

    for(let i; i <= n; i++) {
        sum += n[i]; //If n is 4 its executed 4 times
    }

    return sum;  //If n is 4 its executed 1 times
}

  /**
   * 
   * Total executed count is 4 + 1+1
   * n + 2
   * Big O is expressed in terms of the input
   * value +2 is insignificant because it still remains the sames as n increases so its dropped
   * This means it does't affect performance in any way
   * So the Time complexity of our summation complexity is refered to as
   * 
   *  O(n) or Linear
   **/
  
  function summation2(n) {
    return (n * (n+1)) / 2 // if n is 4 it executed 1 time so the time complexity is Constant or 0(1)
  }

  function nestedLoops(n) {
    for(let i = 1; i <= n; i++) {
        
        for(let j = 1; j <=i; j++) {
            /** 
             * if there are two nested loops the time complexity is considered Quadratic 0(n-squared)
             * 3n-Squared + 5n+ 1
             * */

            /**
             * If there are 3 nested loops the time complexity is refered to as Cubic  0(n - Cubic)
             */
        }
    }
  }

  /**
   * if the input size reduces by half on every iteration its refered to as logarithmic 0(LOG n)
   */

  //SPACE COMPLEXITY

  /**
   * 0(1) - Constant  : if the memory allocated doesn't depand on the input size;
   * 
   * 0(n) - Linear : Extra space grows as the input grows
   * 
   * O(Logn) -Logarithmic : Grows as the input increases but not at the same rate