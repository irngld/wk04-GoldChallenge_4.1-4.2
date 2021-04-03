/*
    - With the given shoppingList array, use array destructuring to assign each array within the shoppingList array its own variable. Then, reinitialize the shoppingList array so it is a single array containing all of the values from the original array. 
    
    - after the shoppingList array has been reinitialized, using the array.prototype.map method, map over the newly initialized shoppingList array. You should do the following within the map method:
        - include a parameter for index
        - utilize the array.prototype.push method to push the current value being mapped over into the appropriate key/value pair in the obj variable
            - you will need to implement some sort of logic to check the index of the current item being mapped over.
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

let shoppingList = [[ 'eggs', 'milk', 'butter' ], [ 'cleaner', 'trash bags', 'detergent' ], [ 'thank you card', 'pens', 'gift wrapping' ], [ 'shoes', 't-shirt', 'slacks' ]];

let obj = {
cleaning: [],
gifts: [],
clothing: [],
grocery: []
};


let [a, b, c, d] = shoppingList; // destructuring
// console.log(a, b, c, d);

shoppingList = [...a, ...b, ...c, ...d]; // "shoppingList =" reinitializing 
console.log(shoppingList);

shoppingList.map((e, index) => {
    if (index < 3) {
        // console.log(`${index}: is less than 3`);
        obj.grocery.push(e);
    }
    else if (index > 2 && index < 6) {
        // console.log(`${index}: is less than 6`);
        obj.cleaning.push(e);
    }
    else if (index > 5 && index < 9) {
        // console.log(`${index}: is less than 9`);
        obj.gifts.push(e);
    }
    else {
        // console.log(`${index}: is less than everything else`);
        obj.clothing.push(e);
    }
})

console.log(obj);