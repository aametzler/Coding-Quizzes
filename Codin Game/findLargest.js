/*
* Easy - should return the largest integer from the numbers array.
* numbers is an array of integers which always contains at least one number.
*/

function findLargest(numbers) {
    if(numbers.length === 0) return 'Array is empty'
    
    let largest = numbers[0];
    numbers.forEach((num) => {
        if(num > largest) largest = num;
    })

    return largest;
}