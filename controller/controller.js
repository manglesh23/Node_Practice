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

let numbers=[1,2,3,4,5,6];
let multiply=numbers.map(item=>item*2);
console.log( multiply)

module.exports={home};