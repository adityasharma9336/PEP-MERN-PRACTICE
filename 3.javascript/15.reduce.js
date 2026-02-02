//  Reduce: It executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

//  syntax:
// Array.reduce((accumulator, currentValue, initialValue) 
//  return updated Accumulator;
// }, initialValue);

//  1.Basics;
let arr = [ 2,3,5,6,7,8,9,];
 let newArr = arr.reduce((num1, num2) => {
    return num1 + num2;
}, 0);
console.log(newArr);

// Find the product of arr;
    let product = arr.reduce((num1, num2) => {
        return num1 * num2;
    }, 1);
console.log(product);

//  3 . Reduceer on objects;
 let students = [
    {name: "Aditya", 
     marks: 60
    },
    {name: "Pawan", 
     marks: 92
    },
    {name: "Ajeet", 
     marks: 78
    },
    {name: "Raj", 
     marks: 88
    },
 ];
 let totalMarks = students.reduce((total, student) => {
    return total + student.marks;
 }, 0);
 console.log("Total Marks of students:", totalMarks);

//   create a group of students into pass and fail categories by dynamically creating an object;
//  so basically we have to convert array to object;
//  condition ? cyz : yze;

  
// let groupByMarks = students.reduce((group, student) => {
//     (student.marks >= 80 ? "pass" : "fail").push(student);
//     return group;
// }, { pass: [], fail: [] });

// console.log("Grouped Students:", groupByMarks);

let groupByMarks = students.reduce((group, student) => {
   let key = student.marks >= 80 ? "pass": "fail";
    if(!group[key]) group[key] = [];
    
    group[key].push(student.name);
    return group;
}, {});
console.log("Student pass and fail:", groupByMarks);