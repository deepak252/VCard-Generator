let vCardsJS = require('vcards-js');

const generateVcard = (user,file) => {
    try{
        let vCard = vCardsJS();
        // Set contact properties
        vCard.firstName = user.firstName||'';
        vCard.middleName = user.middleName || '';
        vCard.lastName = user.lastName || '';
        vCard.organization = user.organization || '';
        // vCard.title = "Technical Writer";
        vCard.email = user.email || '';
        vCard.cellPhone = user.phone;
        vCard.workPhone = user.workPhone || ''
        vCard.url = user.url || '';

        // Save contact to VCF file
        vCard.saveToFile(file);
        return true;
    }catch(e){
        console.log("generateVcard error : ",e);
    }
}

module.exports = generateVcard;