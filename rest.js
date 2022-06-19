const express=require('express');

const app=express();
const port=7070;

app.get('/',(req,res)=>{
    res.send('Hotel Management System, from express');
});

app.post('/',(req,res)=>{
    console.log(req)
    res.send('Hotel Management System, from express');
});

app.listen(port,()=>console.log(`Hotel Management System app listening on port ${port}`))
