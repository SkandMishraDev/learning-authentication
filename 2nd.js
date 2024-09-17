const express =require("express");
const app= express();

function namevalidator(req,res,next){
    if(username!="shivansh"||password!=123){
        res.send("user is invalid")
    }else{
        next();
    }
};

function kidneyId(req,res,next){
    if(kidney!=1||kidney!=2){
        res.send("input is invalid")
    }else{
        next();
    }
};
const numberofrequest=0;
function calculatereq(req,res,next){
    numberofrequest++;
    next();
}

app.get("/",namevalidator,kidneyId,calculatereq,(req,res)=>{
    res.send("your are healthy")
});

app.listen(3000);
