console.log("server file");
require('dotenv').config();
const express= require('express');
const { router } = require('./auth_router/auth_router');
const  {connectDatabase}=require('./connectDatabase/connectdatabase')
const app= express();

app.use(express.json());
app.use("/",router);
const PORT=process.env.PORT;
connectDatabase().then(()=>{
    app.listen(PORT,()=>{
        console.log("listening on the port 6000");
    })
}).catch((e)=>{
    console.log(e);
})