/*
* Easy - The follwing factorial function written by your colleague Fred is supposed to return the factorial of a number. but it is broken.
* Fix the factorial function.
* As a reminder: factorial(n) = 1 * 2 * 3 * ... * n
* function factorial(n) {
*    if (n = 0) {
*        return 1;
*    }
*    else {
*        return n * factorial(n);
*    }
*}
*/

function factorial(n) {
    if(n <= 0) {
        return 1;
    } else {
        return n*factorial(n - 1);
    }
}

console.log(factorial(5));