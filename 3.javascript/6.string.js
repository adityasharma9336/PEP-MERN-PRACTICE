
// strings are immutable(it can not be changed by index assignment)

let  AdityaMsg= "hello i am aditya ";

console.log(AdityaMsg.length); // length of string

 // convert to uppercase
  let uppercase = "this is my name aditya";
  console.log(uppercase.toUpperCase());

 // convert to lowercase
let lowercase = "THIS IS MY NAME ADITYA";
console.log(lowercase.toLowerCase());

console.log(AdityaMsg.includes("aditya")); // check if substring exists

console.log(AdityaMsg.startsWith("hello")); // check if string starts with substring

console.log(AdityaMsg.endsWith("aditya ")); // check if string ends with substring

console.log(AdityaMsg.indexOf("am")); // find index of substring

// Trim: Removed extra witespace from both ensa;
let newAdityaMsg =  AdityaMsg.trim();
console.log(newAdityaMsg);


// Method change: COMBINE MULTIPLE METHODS
let fruit  = "  Apple";
let fruitTrim = fruit.trim();
console.log(fruitTrim);

let fruitAfterchanging = fruit.trim().toUpperCase();
console.log(fruitAfterchanging);

// Slice: extracts part of the strings ( start, end-1)
let msg  = "Is this a my Name";
console.log(msg.slice(4,10));
console.log(msg.slice(-3));

// Replace : replace substring with new substring
let txt = " Hello World";
let newTxt = txt.replace("World", "Aditya");
console.log(newTxt);

//  Repeat : repeat the string multiple times
let message = "hmm ";
console.log(message.repeat(5));