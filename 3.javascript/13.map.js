//  what is map : The map() method in JavaScript is used to create a new array by applying a provided function to each element of an existing array. It does not modify the original array but instead returns a new array containing the results of calling the provided function on each element.
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log(doubled);


//  map() callback: (elements , index, value)
let a = arr.map((val, index, array)=>{
    console.log(`Index: ${index} , val: ${val}, Array:`, array);
    return val * 4;
});

// chaining using map() operation:
 let result  = 
 arr.map((num) => num * 2)
 arr.map((num) => num + 3)
 arr.map((num) => num  - 4)
 console.log("chaining result is:" , result);

 