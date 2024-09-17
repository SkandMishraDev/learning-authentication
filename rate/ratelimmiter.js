const express =require("express");
const app =express();

let numberofrequestforuser={};
setInterval(()=>{
    numberofrequestforuser={};
},1000)
app.use(function(req,res,next){
    const userid =req.headers["userid"];

    if(numberofrequestforuser[userid]){
        numberofrequestforuser[userid]=numberofrequestforuser[userid]+1;
        if(numberofrequestforuser[userid]>5){
            res.status(404).send("no entry");
        }else{
            next();
        }
    }else{
        numberofrequestforuser[userid]=1;
        next();
    }
})
app.get("/",function(req,res){

});
 
app.listen(3000,()=>{
    console.log("done on port 3000");
})