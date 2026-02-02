//  Rest Parameter
function sum(...numbers) {  
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40, 50));
console.log(sum(5, 15));

//  normal parameter function + rest parameter
    

//  rest with arrow function;
 const multiply = (...nums) => {
    return nums.reduce((acc, curr) => acc * curr, 1);
 };

 console.log(multiply(2,3));
 console.log(multiply(4,5,6));
 console.log(multiply(1,2,3,4,5));