const {Router} = require("express");
const {validateModel} = require("../middlewares")
const controllers = require("../controllers");
//const { model } = require("mongoose");

const router = Router();



router.get ("/:model", validateModel, controllers.lists) 
router.get ("/:model/:id", validateModel, controllers.gets) 
router.post("/:model", validateModel, controllers.inserts)

console.log("estoy en servicio bd");




module.exports = router;