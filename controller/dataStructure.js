console.log("data Structure jjbjfbs");
const dataStructure=(req,res)=>{
    console.log("main manish hu");
    res.status(200).json({message:"Data Structure"});

}

let num=101;
let name="malylam";
const checkpailanDrpmee=(num)=>{
    console.log(typeof num);
    if(typeof(num)==='number'){
    return num===+num.toString().split("").reverse().join("");
    }else{
        return num===num.split("").reverse().join("");
    }
}
const value=checkpailanDrpmee(name);
console.log("value:-",value);

const fib=(n)=>{
    if(n<=1)
        return n;
    
    return fib(n-1)+fib(n-2);
}
console.log(fib(3));

function anagram(s,t){
    s =s.split("").sort().join("");
    t=t.split("").sort().join("");
    return s===t
}
console.log("Anagram Check:-",anagram('anme','name'))

module.exports={dataStructure}
