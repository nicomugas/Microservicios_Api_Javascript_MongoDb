

const axios = require("axios");

module.exports = {
  list: async () => {
    const datos = await axios.get("http://localhost:8004/Character");
    console.log(datos);
    return datos.data;
  },

  create: async (body) => {
    const datos = await axios.post("http://localhost:8004/Character", body);
    console.log(datos.data);
    return datos.data;
  },
};
