const { on } = require("events");

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
console.log("Anagram Check:-",anagram('anme','name'));

function anagramsentace(one,two){
    one=one.split(' ').join('');
    console.log(one)
    // console.log(one.split('').sort().join(''));
    one=one.split('').sort().join('')



    two=two.split(' ').join('');
    console.log(two)
    two=two.split('').sort().join('');
    console.log(one,two);
    return one===two
}
console.log("sent ana:-",anagramsentace('you you',"you you"));

function findtraget(arr,target){        //two sun problem
    arr=arr.sort();
    console.log(arr);
    let i=0;
    let j=arr.length-1;
     console.log(j)
    while(i<j){
        if(arr[i]+arr[j]>target){
            j--;
        }
        if(arr[i]+arr[j]<target){
            i++;

        }
        if(arr[i]+arr[j]===target){
            console.log("target found:-",arr[i],arr[j]);
            return;
        }
    }
   console.log("not found")
}

findtraget([3,4,1,7,9,7],8);

function count(str){
    let obj={};
    for(let v of str){
        if(obj[v]){
            obj[v]++
        }else{
            obj[v]=1
        }
    }
    console.log(obj);
}
count("mangleshyadav");

function maxsubarray(arr){
    console.log(",ax sum");
    let maxsofar=arr[0];
    let maxending=arr[0];
    let start=0;
    let end=0;
    let s=0;
    for(let i=0;i<arr.length;i++){
        // maxending=Math.max(v,maxending+v);
        // maxsofar=Math.max(maxsofar,maxending);
        if(arr[i]>maxending){
            maxending=arr[i];
            s=i
        }else{
            maxending+=arr[i];
        }

        if(maxending>maxsofar){
            maxsofar=maxending;
            start=s;
            end=i;
        }
    }
    console.log(maxsofar)
    return {maxsofar:maxsofar,start:start,end:end}

}

console.log(maxsubarray([1,2,3,-1,-2,6,0,-9,2,5]));

function maxprofit(arr){
    let minprice=arr[0];
    let maxprofit=0;
    let buyday=0;
    let sell=0;
    for(let i =0;i<arr.length;i++){
        //  minprice=Math.min(minprice,arr[i]);
         if(minprice>arr[i]){
            minprice=arr[i];
            buyday=i;
         }
         let profit=arr[i]-minprice;
         if(profit>maxprofit){
            maxprofit=profit;
            sell=i;

         }
        
        //  maxprofit=Math.max(maxprofit,profit)
    }
    console.log(maxprofit)
    return {maxProfit:maxprofit,buy:buyday,sell:sell};

}
console.log("Max Profit:-",maxprofit([7,1,1,1,1,5]));


module.exports={dataStructure}
