const home=async(req,res)=>{
    try{
        console.log("consoel me print");
     res.status(200).json({message:"Home page form controller got it now"});
    }catch(e){
        return{
            error:true,
            details:e
        }
    }
}

function squre(num){ // function declaration  
  return num*num;
}

const squre1= function(num){   //function expression when function is stored in a veriable
    return num*num
}                             // in this function doesn't have name--it's called anynonums function
console.log(squre1(6));

//first class function
function mulit(num1,num){     // fucntion can be treated like a variable, can be passed to another function
    return num1*num  
}

function display(fn){
    console.log("First class function:-",fn(7,9));
}

display(mulit);


//IIFE--->imidiealty invoked function expression

(function sum(num,value){
    console.log(num+value);   //function was called from sum---then the function declaration closed in open paraenthiess
})(7,3)

// sum(7,1);

// (function(x){
//     return (function(y){
//         console.log(x)
//     })(2);
// })(1)

let numbers=[1,2,3,4,5,6];
let multiply=numbers.map(item=>item*2);
console.log( multiply);


function outerfunction(){
    let outer="outer hu";
    function innner(){
        let inside="inner hu";
        console.log("Outer value:-",outer)
    }
    innner();
    // console.log(inside);
    
           // function declaared inside a function can be access by the outer function
                                 //outer function's variable can be accessed by inner as well
                                 //inner function variables function can't be accessed by out
    }

outerfunction();


for(let i =0;i<3;i++){   // Set Time out, Using let keyword, 
    setTimeout(()=>{
        console.log(i);
    },i*1000);
}

function scope(){
    var  x=23;
    console.log(x);
   var x="string";
    console.log(x);
}

scope();

let z=10;
function value(){
    console.log("value of z:-",z);
    var z=90;
    
}
value();

function greeting(...value){
    console.log(value[1])
    // console.log(`hello ${value[0]} * ${value[1]}`)
    console.log(value[0]*value[1])
}
function callbackfunction(callback){
    let name="manglesh";
    callback(9,7)
}
callbackfunction(greeting);      // Callback function, Function passed into another function as an argument 

let arr=[1,1,2,2,12,4,3,5,2,6,3,4];
let unique=[...new Set(arr)];
console.log(unique);

function fun(){
    console.log(arguments);
}
// const fun=()=>{
//     console.log(arguments)
// }
fun(1,2,3,4,5);

function makefun(){

    function display(num){
        console.log("display function inside makefun",num);

    }
    console.log("Pringting",display());
    return display;
}
makefun()(5);
// console.log("calling:-",makefun())
module.exports={home};