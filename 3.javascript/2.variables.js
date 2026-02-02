// var: Function-scoped variable declaration. It can be updated and re-declared within its scope.

// var a = 10;

// console.log(a); // 10

// let b = 20;
// console.log(b); // 20

// const c = 30;
// console.log(c); // 30

// var globalVar = "I am a global variable";

// function checkGlobalScope() {
//     console.log(globalVar); 
//     }
//     console.log(globalVar); // I am a global variable


// checkGlobalScope();


// let: Block-scoped variable declaration. It can be updated but not re-declared in the same scope.it has functional scope 

// let b = 40; 
// console.log(b); // 40
// b = 50;
// console.log(b); // 50           



// const: Block-scoped constant declaration. It cannot be updated or re-declared. Must be initialized at the time of declaration.
const a = 60;
console.log(a);
 
// const a = 20;  
// redeclaration for const is not allowed
// a = 70;
// reassignment for const is not allowed

// Block scope example for let and const

{
    const blockScopeVariables = "I am block-scoped";
    console.log(blockScopeVariables); // I am block-scoped
}
// console.log(blockScopeVariables); this is not allowed outside the block it throws an error