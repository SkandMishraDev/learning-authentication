const express =require("express");
const  jwt =require("jsonwebtoken");
const app =express();
const jwtpassword ="12345678";

const All_User=[{
    username:"skandmishra9169",
    password:"1223",
    name:"Skand Mishra",
},{
    username:"ektamishra9169",
    password:"1234",
    name:"Skand Mishra",
},{
    username:"parulmishra9169",
    password:"123",
    name:"Skand Mishra",
},];
//wirte logic to return true or false if this user existsin alluser array;
function userexist(username,password){
    let userexist = false;
    for(i=0;i<4;i++){
        if(username==All_User[0].username||password==All_User[i].password){
            userexist=true;
        }

    }
    return userexist;

}
app.post("/signin",function(req,res){
    const username =req.body.username;
    const password =req.body.password;

    if(userexist(username,password)){
        return res.status(403).json({
            msg :"user  exist"
        });
    }else{
        res.json({
            msg:"user don't exist"
        })
    }

    let token =jwt.sign({username: username},jwtpassword);
    return res.json({
        token,
    });
});

app.get("/users",function(req,res){
    const token =req.headers.authorization;
    const decoded =jwt.verify(token,jwtpassword);
    const username=decoded.username;
    return username;
  
});

app.listen(3000, ()=>{
    console.log("port 3000");
});