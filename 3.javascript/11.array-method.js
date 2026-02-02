// array are mutable (can be changed);

let student = ["Aditya", "12316709", "LPU"];
console.log(student);

//  Array are mutable;
student[1]= 1236709;
console.log( student);

//  accessing values using index in array;
 console.log(student[2]);

// array tyoe in object
console.log(typeof student);

// ##################################################### Array Method #########################################################

let car = ['audi', 'bmw','maruti','nano'];

//  PUSH: ads in 1st palce of array
car.push("volvo");
console.log(car);

// pop : remove in last place of array;
 car.pop();
 console.log(car);

//  unshift: Add at start;
car.unshift("swift");
console.log(car);

// shift: it remove  by default first element
car.shift();
console.log(car);

//  Index of : it returs the index of something:
console.log(car.indexOf("bmw"));

// includes: tells wheather the value is present in array or not: it returns in true and false ;
 console.log((car.includes("swift")));

//  concat: add or merges 2 array;
let arr1 = ["apple", "banana"];
let arr2 = ["mango", "grapes"];
console.log(arr2.concat.arr1);

//  Slice : cpoies a question of an array ;
let letter = ["a","b","c","d","t"];
console.log(letter.slice());

console.log(letter.slice(2));

// 10: it is use to replace / removing and adding a new element in an array
let fruit = ["apple","mango", "banana","pineapple"];
console.log(fruit.splice(3));
console.log(fruit.splice(0,1, "grapes"));
console.log(fruit);

// sort: sorts an array:: it does not sort number or letters in assecnding order. it sort as per that character or letter associated string value.
let alphanet = ["a","d","i","t","y"];
console.log(alphanet.sort());

// let num = [ 1,2,3,4,4,5,5,6];
// console.log(num.sort(0,1));