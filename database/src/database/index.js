const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");

const conn = mongoose.createConnection(MONGO_URI);

module.exports = {
  Character: conn.model("Characters", require("./schemas/characterSchema")),
  Film: conn.model("Films", require("./schemas/filmSchema")),
  Planet: conn.model("Planets", require("./schemas/planetSchema")),
};
