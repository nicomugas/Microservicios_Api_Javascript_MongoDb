const Character = require("../data");
const {response} = require('../utils')
 
module.exports = async (req,res) => {

    console.log("estoy en get characters");
    const characters = await Character.list();
    console.log(characters);
    response(res,200,characters)
}