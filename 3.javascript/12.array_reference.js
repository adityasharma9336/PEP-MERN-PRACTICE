//  what is array reference in javascript: a reference type is a data type that stores the memory address of the actual data rather than the data itself. In JavaScript, objects and arrays are reference types. When you assign an array or object to a variable, you are actually assigning a reference to that array or object in memory, not a copy of the array or object itself.

// When you compare two reference types using the equality operators (== or ===), you are comparing their references (memory addresses) rather than their actual values. Therefore, two different arrays or objects with the same content will not be considered equal because they occupy different memory locations.

// Example 1: Comparing two arrays with the same content
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let str1= "aditya";
let str2 = str1;
console.log(str1== str2);

let marks = [ 55 ,89,79,34,56];
let newMarks = marks;
console.log(marks == newMarks);
console.log(marks === newMarks);
marks = [89,91,22];
 console.log(marks == newMarks);