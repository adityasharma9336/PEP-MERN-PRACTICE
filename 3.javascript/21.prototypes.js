// prototypes
// ja is a prototype  language, Every object has a hidden property called [[prototype]] which is a reference to another object. When we try to access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks up the prototype chain until it finds the property or reaches the end of the chain (null).

// 1. Prototypal Inheritance: Objects can inherit properties and methods from other objects through the prototype chain. This allows for code reuse and the creation of complex object hierarchies.

//  we acces it using __proto__ or Object.getPrototypeOf() method
//  1.basic about prototypes
const person1 = {
    name: "aditya",
    age: 22,
    greet: function(){
        console.log(person1);
    },
};
person1.greet(); // Hello, my name is aditya and I am 22 years old.
 
//  creating person2 object that inherits from person1
const person2 = Object.create(person1);
console.log(person2); 
// person2.name = "pawan";
// person2.age = 25;
// person2.greet(); // Hello, my name is pawan and I am 25 years old.

//  person3 prototype is person2
 const person3 = Object.create(person2);
console.log(person3);

// prototype chaining   
console.log(person3.__proto__ === person2); // true
console.log(person2.__proto__ === person1); // true


//  checking prototype link
console.log(person3.__proto__ === person2); // true
console.log(person2.__proto__ === person1); // true
console.log(person1.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true

//  prototype overriding( shadowing)    
person2.name = "pawan"; // creating its own property for person2

console.log(person2.name); // pawan ( own property)
// but person3 doesnt have name property so it looks up the prototype chain

// 6.hasOwnProperty():
console.log(person3.hasOwnProperty('name')); // false
console.log(person2.hasOwnProperty('name')); // true
console.log(person1.hasOwnProperty('name')); // false

//  7 Prototype in array 
const arr = [1,2,3,4,5];
console.log(arr);
console.log(arr.__proto__ === Array.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true

//  8. Prototype in functions
// in functions there are 2 types of prototypes
// 1. prototype : used when function is used as a constructor with new keyword
// 2. __proto__ : refers to Function.prototype it is use for function inheritance

const func = function(){
    console.log("hello");
};
console.log(func.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
