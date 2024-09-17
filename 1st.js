const express =require("express");
const app =express();

app.get("/health-checkup",function(req,res){
    const username=req.headers.username;
    const password=req.headers.password;
    const kidneyid=req.query.kidneyid;
    if(username!="harkirat"||paswword!="pagal123"){
        res.status(403).json({
    msg : "user don't exit"
    })
    return;
}
    if (kidneyid!=1||kidneyid!=2){
        res.status(411).json({
            msg:"wrong input"
        })
        return;
    }
    res.json({
        msg:"your heath is healthy"
    })


})
app.listen(3000);