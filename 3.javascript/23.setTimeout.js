//  settimeout : it is func which we use to execute a function after specific delay;
function hello()
{
    console.log("This is a inner function hello");
}
setTimeout(hello, 2000); // after 2 sec it will print hello function

//  we can also use anonymous function inside settimeout
setTimeout(function(){
    console.log("This is an anonymous function inside settimeout");
}, 3000); // after 3 sec it will print this message



//  we can also use arrow function inside settimeout
setTimeout(() => {
    console.log("This is an arrow function inside settimeout");
}, 4000); // after 4 sec it will print this message



//  we can also pass arguments to the function inside settimeout
function greet(name){
    console.log("Hello, " + name + "!");
}
setTimeout(greet, 5000, "Aditya"); // after 5 sec it will print Hello, Aditya!

console.log("This message is printed immediately.");

//  clearTimeout : it is used to cancel the settimeout function
const timeoutId = setTimeout(() => {
    console.log("This message will not be printed.");
}, 6000);

//  cancelling the above settimeout
clearTimeout(timeoutId);
console.log("The timeout has been cleared before execution.");  