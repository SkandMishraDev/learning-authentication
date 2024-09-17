const express =require("express");
const app =express();
app.use(express.json());
const zod =require("zod");
const schema =zod.array(zod.number());

app.post("/", (req,res) =>{
    const kidneys =req.body.kidneys;
    const kidneylength = kidneys.length;
    const response =schema.safeparse(kidneys);

    res.send("you have" +kidneylength +"kidney");
});
// app.get("/",(req,res) =>{
//     res.send("10 is nive");
// });
//this is input validation   
app.use(function(err, req, res, next){
    res.json({
        "msg" : "something is wrong"
    })
});
app.listen(3000);