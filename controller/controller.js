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

module.exports={home};