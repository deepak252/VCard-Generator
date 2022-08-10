const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const PORT = process.env.PORT || '5000';


app.get("/",(req,res)=>{
    res.send("Generate your vcard");
})

app.use('/vcf',require("./routes/vcf"));

app.listen(PORT,()=>console.log("Server is running on port ", PORT));
