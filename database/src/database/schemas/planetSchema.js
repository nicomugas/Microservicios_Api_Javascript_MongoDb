const { Schema } = require("mongoose");

const planetSchema = new Schema({
  _id: String,
  name: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  residents: [{ type: String, ref: "Characters" }],
  films: [{ type: String, ref: "Films" }],
});

planetSchema.statics.list = async function () {
  return await this.find()
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.insert = async function (planet) {
  return await this.create(planet);
};

planetSchema.statics.get = async function (_id) {
  return await this.findById(_id)
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

module.exports = planetSchema;
