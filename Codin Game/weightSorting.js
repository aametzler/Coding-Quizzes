/*
Easy - given 3 weights, return the index of the max weight. 10, 20, 30 should return 1. 
If the function is called without any weights, it should return 0
*/

function solve(weight0, weight1, weight2) {
    // Write your code here
    // To debug: console.error('Debug messages...');
    const maxWeight = Math.max(Math.max(weight0, weight1), weight2);
    if(maxWeight === weight0) return 0
    else if(maxWeight === weight1) return 1
    else if(maxWeight === weight2) return 2
    else return 0
}