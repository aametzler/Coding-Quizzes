/*
* Easy - Write a function which computes the average of an array of numbers.
* Ex: Given input average([0,1,2,3,4,5,6,7,8,9,10]) the output should be 5
*/
function average(n) {
    const sum = n.reduce((a, b) => a + b, 0);
    return (sum / n.length) || 0;
}