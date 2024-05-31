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
let anotherstring="World Hello You With";

function checkanagram(str1,str2){
    console.log(str1,str2);
    if(str1.length!=str2.length)
        return false

    str1=str1.split(" ");
    console.log(str1);

    for(let v of str1){
        console.log(v)
        if(!str2.includes(v));
        return false
    }
    return true
}

console.log("Check Anagram:-",checkanagram(anagramstring,anotherstring));