const generateVcard = require("../utils/vcard_generator");
const fs = require("fs");


const generateVcf = (req,res)=>{
    try{
        const file = `${req.body.uid}.vcf`;
        let vcfGenerated = generateVcard(req.body, file);
        if(vcfGenerated!==true)
            return res.status(401).json({
                "error": "Internal server error"
            });
        setTimeout(() => {
            res.download(file, function (error) {
                if (error)
                    console.log("Download vcf error : ", error)
                else {
                    //remove the file
                    try {
                        fs.unlinkSync(file);
                    } catch (e) {
                        console.log("Remove vcf error : ", e);
                    }
                }
            });           
        }, 100);
    }catch(e){
        res.status(401).json({
            "error": "Internal server error"
        });
    }
}

module.exports={generateVcf}