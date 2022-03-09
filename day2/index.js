const express = require("express") ;
const app =  express() ; 


app.get("/",(req,res)=>{

    res.send("<h1> Hello </h1>") ;
    res.end() ;
});

const arr = [ "Think And Grow Rich" , "The Power of positive Thinking" , "The Magic Of Thinking Big","Fear Not Be Strong"]

app.get("/books",(req,res) => {

    res.send(arr) ;
    res.end() ;
})

app.listen(1233,()=>{
    console.log("Listening In 1233")
})