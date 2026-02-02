//  conditional statements: A condition in JavaScript is used to make decisions by checking true or false values.

//  Conditional Statements
//   // 1. if statement
//   // 2. if...else statement
//   // 3. else if ladder
//   // 4. switch statement

//  Example of if...else  statement
let age = 18;
if (age >= 18) {
    console.log(" you are an adult , you can  vote");
} else {
    console.log(" you are an adult you cannot vote");
}   

// Example of else if ladder
let lightColor = prompt("Enter the traffic light color");
if(lightColor ==="green"){
    console.log("you can Go");
}else if(lightColor === "yellow"){
    console.log("you can go slow");
}else if(lightColor === "red"){
    console.log("you should stop ");
}