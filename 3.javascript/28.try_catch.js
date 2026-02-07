// try: all risky code 
// catch: to handle errors 
// finally: 

// try{
//     let a = " aditya";
//     console.log(a.toUpperCase());
// }catch(err){
//     console.log("Error caught:", err.message);
// }finally{
//     console.log("always runs");
// }

//  async/await;
//  Async is a keywords used before a function to makje it ansynchronous;
// Asynk: to represent promises in clear version we use async ans await;


// //   example;
// function getmaggi(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("maggi is ready");
//         }, 2000);
//     });
// }


//  async function eatmaggi(){
//     console.log("waiting..");


// try{
//     let result =  await getmaggi();
//     console.log(result);

// }catch(error){
//     console.log("error:", error);
// }
// console.log("done eating");
// };


//  Async always return a promise:
  async function demo(){
    return 10;

}
demo().then(console.log);