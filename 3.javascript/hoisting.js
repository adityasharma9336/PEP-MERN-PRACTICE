//  hoisting; javascript moves declaration (not  initialisation) to the top of the scope during the compilation phase.

//  var hoisting : hhoisting is possible , initialized with " undefined "

 conspole.log(x);
 var x = 4;  // declearation
 console.log(x);

//   memory : variable and function , golabal execution environment : x , func, function name 
//  memory alloaction phase:


//  let and const hoisting : hoisting is possible ,reference error; beacuse temperal dead zone (TDZ)
// console.log(y);  // refrenece ErroR : TDZ
// let y = 20;
// console.log(y);


//  function hoisting

function hoisting(){
    //var:inside function:
    //console.log(a); // undefined
     var  a  = 10;
      console.log(a); 

      let b = 20;
      console.log(b);




//  function expression (not fully hoisted)
 console.log(bar); // undefined
  var bar  = function (){
    return " function expression";
  };
   console.log(bar());
}

 // function call;
 hoisting();

 
