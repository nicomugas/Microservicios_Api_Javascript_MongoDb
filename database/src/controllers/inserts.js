const store = require("../database");

module.exports = async (req, res) => {
  const { model } = req.params;
  const { body } = req;

  if (model === "Character") {
    const response = await store.Character.insert(body);
    res.status(200).json(response);
  }

  if (model === "Film") {
    const response = await store.Film.insert(body);
    res.status(200).json(response);
    
  }

  if (model === "Planet") {
    const response = await store.Planet.insert(body);
    res.status(200).json(response);
  }
  // const response = await store[model].get(id);
  // res.status(200).json(response)
};
