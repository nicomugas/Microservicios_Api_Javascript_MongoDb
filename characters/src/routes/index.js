const {Router} = require("express");
const controllers = require("../controllers")
const middlewares = require("../middlewares")

const router = Router();

console.log("estoy herrreee")

router.get("/characters", controllers.getCharacters);
router.post("/characters", middlewares.characterValidation, controllers.createCharacter)

module.exports = router