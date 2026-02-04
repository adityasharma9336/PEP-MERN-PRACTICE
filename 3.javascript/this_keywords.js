//  this: it is a keywords which referes to the object that is executing current function  and it s value is defined at runtime ( how a function is called )

//  This in global sapce : 
//  browser : window object-> non - strict , strict - window
console.log(this);
("use strict");
console.log(this);

//  this  inside  the function;
//  non- strict : golobal object ( window, global);
//  strict mode;
//  this -> undefined

function x(){
    console.log(this);
}
x();

//  this depend on how  dunction is called 
function show(){
    console.log(this);

}
show(); // global: undefined
window.show(); // window ( browser)

// this inside a object : so this inside a object referes to object.
// when  afunction is called using dot (obj.method()), this refer to the object before the dot.
const obj = {
a: 10,
b : function(){
    console.log(this); // refere to object
    console.log(this.a); // a-> 10
},
};
obj.b();

//  methods: call(),apply(),bind();

const student = {
    name:" aditya"
}
const student2 ={
    name: "pawan"
}
function showDetails(state1,state2){
    console.log(this.name());
    console.log(state1,state2);
}

//  call argument passed individually
showDetails("axt", "abcd");
showDetails.call(student1, "up", "gkp");

//  apply argument passed as an array;
showDetails.apply(student2, ["mumbai" , "noida"]);

// bind : return a new function ;
  const boundFunc = showDetails.bind(student2, "noida" , "rajasthan");
  boundFunc();

//   this inside an arrow function;
// arrow function dont have there own this
// they take this from their lexical environement . here lexcial envuirounment meand =s global scope .
const num = {
    a: 10 , 
    b:() =>{
        console.log(this);
    },
}
num.b();

//  this inside DOM(browser);
//  here this refere to the element that  is event is attached to.
<button onClick="handleClick()">click me</button>
// function handleClick(){
//     console.log(this); // refere to button element
// }
