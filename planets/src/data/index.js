
const axios = require("axios")



module.exports = {
    list: async () => {
       
        const datos= await axios.get("http://localhost:8004/Planet")      
       return  datos.data
    },

    create: async (body) => {
        const datos = await axios.post("http://localhost:8004/Planet", body);        
        return datos.data;
      },
}