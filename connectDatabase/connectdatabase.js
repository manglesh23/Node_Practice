require('dotenv').config();
const mongoose= require('mongoose');
const URI= process.env.PRODUCTION_DATABASE_KEY;

const connectDatabase= async()=>{
    try{
       console.log("database connection Ho gya");
    //    await mongoose.connect(URI)
    }catch(e){
      console.log("failed to connect:-",e);
        return{
            error:true,
            details:e
        }
    }
}

module.exports={connectDatabase}