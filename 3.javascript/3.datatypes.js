//  1.number
 let a = 20;
 let b = -30;
 let c = 2.5;
 console.log(a);
 console.log(b);
 console.log(c);
 console.log(typeof a); // "number"
 console.log(typeof b); // "number"
 console.log(typeof c); // "number"
 
 // 2.string
 let x = "aditya";
 console.log(x);
 console.log(typeof x); // "string"

//   3 null
let j = null;
console.log(j);
console.log(typeof j); // "object" (this is a known quirk in JavaScript)

// 4. undefined
let k;
console.log(k); // undefined
console.log(typeof k); // "undefined"

// 5 bigint
let bigint= 1234567897543;
console.log(bigint);
console.log(typeof bigint); //  bigint

// 6 boolean
let v = false;
console.log(v);
console.log(typeof v); // "boolean"

// 7 symbol it is premitive data type  that is used to create unique identifiers for objects.
let sym = Symbol("id");
console.log(sym);
console.log(typeof sym); // "symbol"

// 8 object
let obj = {
    name: "aditya",
    age: 22
};
console.log(obj);
console.log(typeof obj); // "object"