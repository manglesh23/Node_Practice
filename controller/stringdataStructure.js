const StringDataStructure=async(req,res)=>{
    res.status(200).json({message:"String Data Structure File"});
}

module.exports={StringDataStructure};

const str="manglesh yadav 123231";
console.log(str);
console.log(str.replaceAll("a","z"));
//concat --to add string with another string
console.log(str.concat(" ","shaktiman"))  ;

let anagramstring="Hello World With You";
let anotherstring="world hello you with";

function checkanagram(str1,str2){
    console.log(str1,str2);
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    if(str1.length!=str2.length)
        return false

    str1=str1.split(" ").sort();
    str2=str2.split(" ").sort();
    console.log(str1);

    // for(let v of str1){
    //     console.log(v)
    //     if(!str2.includes(v));
    //     return false
    // }
    for(let i=0;i<str1.length;i++){
        if(str1[i]!=str2[i]){
            return false
        }
    }
    return true
}

console.log("Check Anagram:-",checkanagram(anagramstring,anotherstring));

let a1=[1,2,3,4,6];
let a2=a1;
console.log("a2 :-",a2);

let today=new Date();
let sevendays=new Date(today);
sevendays=sevendays.setDate(today.getDate()-7);
console.log(today,sevendays);

const currentdate = new Date();
const currentDateIndex = currentdate.getDate();
console.log("today:-", currentdate);

let sevenDaysBefore = new Date(currentdate);
sevenDaysBefore.setDate(currentDateIndex - 7);

console.log('Seven Days Before:', sevenDaysBefore);


const moment=require('moment'); // moment liberary
let getDate=moment().format('YYYY-MM-DD');
console.log(getDate)

let datemodi=moment(getDate,'YYYY-MM-DD').toDate();
console.log("data modi:-",datemodi);

let daysbefore=moment().subtract(7,'days');
daysbefore=daysbefore.format('YYYY-MM-DD');
console.log(daysbefore);

let name="manglesh ";
console.log(name.charCodeAt(1));
console.log(String.fromCharCode(65));

let string1="hello to the world";
let string2="hello the he world";

function check(string1,string2){
    if(string1.length!=string2.length)
        return false
string2 =string2.split(" ");
console.log(string2)
for(let v of string2){
 if(!string1.includes(v))
    return false
}
return true
}


console.log("check annagra:-",check(string1,string2));

let joinstring="hey there!";
let jointhis="no";
let arr=["hey there","no"];
let b=arr.join(" ");
console.log(b);

function pailandromeNumber(num){
    if(num<0){
        return false
    }
    let num1=num;
    num1=String(num1);
    console.log(num1)
    num1=num1.split('').reverse().join('');
    num=String(num);
    if(num1===(num)){
        console.log("painlodrom");
        return
    }
    console.log("not");
}

pailandromeNumber(102);

//hamming distance

function hammingDistance(str1,str2){
    if(str1.length!=str2.length)
        return false;
 let distance=0;
    for(let i=0;i<str1.length;i++){
        if(str1[i]!=str2[i])
            distance++;
    }
    return distance;
}
console.log("Distance:-",hammingDistance("manglesh","manglehs"));

function countcharocc(str){
    let map=new Map();
    for(let i =0;i<str.length;i++){
        if(map.has(str[i])){
           map.set(str[i],map.get(str[i])+1)
        }else{
            map.set(str[i],1);
        }
    }
    return map
}
console.log("char occ:-",countcharocc("mangleshhsm"));

const maxelement=(arr)=>{
    arr=arr.sort();
    console.log(arr[arr.length-1]);
}
maxelement([2,5,1,8,6,90,8]);