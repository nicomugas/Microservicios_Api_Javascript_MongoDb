const characters = require('./characters.json')
//import axios from "axios";
const axios = require("axios")

module.exports = {
    list: async () => {

        console.log("estoy en list");
        //return characters;
       // return axios.get("http://starwars-database:8004")
      const datos= await axios.get("http://localhost:8004/Character")
      console.log(datos);
       return datos.data
    },

    create: async() =>{
        throw Error("hubo error")
    }
}