console.log("server file");
const express= require('express');
const { router } = require('./auth_router/auth_router');
const  {connectDatabase}=require('./connectDatabase/connectdatabase')
const app= express();

app.use(express.json());
app.use("/",router);

connectDatabase().then(()=>{
    app.listen(5000,()=>{
        console.log("listening on the port 6000");
    })
}).catch((e)=>{
    console.log(e);
})