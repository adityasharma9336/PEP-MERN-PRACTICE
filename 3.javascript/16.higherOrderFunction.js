// Higher Order Functions: A higher-order function is a function that takes another function as an argument or returns a function as a result.

// creating function;
 function Aditya(){
    console.log("Hello Aditya");
 };

//  higher order function
function myfunc(callback){
    callback(); // calling a function passed a agrument;
};

//  passing function as an argument;
//  myfunc(Aditya);
//  myfunc(Hello);

//   Higher order function : It is a function which takes another functions as an arguments function return function as a result;

//  create function to calulate area of circle pass radius as an argument;
const radius = [2,3,4,5];

//  normal way to calculate area of circle;
   function calculateArea(radius){
    const output = [];
    for(let i = 0; i<radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
console.log(`Area of circle:`, calculateArea(radius));

//  same calculate area of radius with Higher order function;

const area = (r) => Math.PI * r * r;
const circumference = (r) => 2 * Math.PI * r;
const diameter = (r) => 2 * r;
function calculate(arr, logic){
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(logic(arr[i])); // logic is a callback function;
    }
    return output;
}
console.log("Area of circle:",calculate(radius, area));
console.log("Circumference of circle:",calculate(radius, circumference));
console.log("Diameter of circle:",calculate(radius, diameter));

