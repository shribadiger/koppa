//application bring up package
const express=require('express');
const app=express(); //creating the express object

app.listen(4000,()=>{
    console.log("Server is listening on 4000 port");
});