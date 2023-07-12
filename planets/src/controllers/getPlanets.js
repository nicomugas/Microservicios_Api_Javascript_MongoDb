const Planet = require("../data");
 
module.exports = async (req,res) => {
    const planets = await Planet.list();
    res.status(200).send(planets)
}