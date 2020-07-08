/*
* Easy - You work in an automated factory and your objective is to write the function that will dispatch
* the packages to the correct stack, according to their volume and mass.
* A package is bulky if its volume (Width x Height x Length) is greater than or equal to 1,000,000 cm3 or 
* when one of its dimensions is greater or equal than 20 kg. 
* 
* You must dispatch the packages in the following stacks:
* (1) STANDARD: standard packages (those which are not bulky nor heavy) can be handled normally.
* (2) SPECIAL: packages that are either heavy or bulky can't be handled automatically.
* (3) REJECTED: packages that are both heavy and bulky are rejected
*
* Implement the function solve(width, height, length, mass). 
* This function must return a string: the name of the stack where the packages should go.
*/

function solve(width, height, length, mass) {
    let bulky, heavy = false;
    
    if(width*height*length >= 1000000 || width >= 150 || height >= 150 || mass >= 150) bulky = true;
    if(mass >= 20) heavy = true;

    if(bulky && heavy) return 'REJECTED'
    else if(bulky && !heavy || !bulky && heavy) return 'SPECIAL'
    else return 'STANDARD'
}