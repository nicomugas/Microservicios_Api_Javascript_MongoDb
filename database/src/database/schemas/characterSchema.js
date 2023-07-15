const { Schema } = require("mongoose");

const characterSchema = new Schema({
  _id: String,
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String, //enum [MALE,FEMALE,ETC]
  homeworld: { type: String, ref: "Planets" },
  films: [{ type: String, ref: "Films" }],
});

characterSchema.statics.list =async function (){
   return await this.find()
    .populate("homeworld",["_id", "name"])
    .populate("films", ["_id", "title"])
}

characterSchema.statics.insert = async function(character){
    console.log("sfsfsdf", character);
    return await this.create(character)
}

characterSchema.statics.get = async function (_id){
    return await this.findById(_id)
    .populate("homeworld",["_id", "name"])
    .populate("films", ["_id", "title"])
}
module.exports = characterSchema;
