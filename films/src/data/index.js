const films = require('./films.json')
const axios = require("axios")



module.exports = {
    list: async () => {
        //return films;
        const datos= await axios.get("http://localhost:8004/Film")
      
       return  datos.data
    }
}