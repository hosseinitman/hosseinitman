const express = require("express")
const app = express();

const PORT = 3000;
app.get('/',(req,res)=>{
    console.log("hi hossein norouzi");
})



app.listen(PORT,()=>{
    console.log(`server is run on port:${PORT}`);
})

