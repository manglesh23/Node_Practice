const StringDataStructure=async(req,res)=>{
    res.status(200).json({message:"String Data Structure File"});
}

module.exports={StringDataStructure};

const str="manglesh yadav 123231";
console.log(str);
console.log(str.replaceAll("a","z"));
//concat --to add string with another string