const express = require("express");
const {generateVcf} = require("../controllers/vfc");
const validateVcf = require("../middlewares/vcf_validator");
const router = express.Router();

router.route("/generate-vcf").post(validateVcf,generateVcf);
module.exports=router;
