const films = require('./films.json')
const axios = require("axios")



module.exports = {
    list: async () => {
        //return films;
        const datos= await axios.get("http://starwars-database:8004/Film")      
       return  datos.data
    },

    create: async (body) => {
        const datos = await axios.post("http://starwars-database:8004/Film", body);        
        return datos.data;
      },
}