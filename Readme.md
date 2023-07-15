
# Starwars Microservicios API

API realiazada para la práctica de Microservicios. 

Cuenta con 5 aplicaciones separadas. 

- Characters
Servicio que maneja información de personajes.
- Films
Servicio que maneja la información de las películas.
- Planets
Servicio que maneja la información de los planetas
- Database
Servicio que maneja conexion y peticiones a la base de datos. 
- Gateway
Puerta de entrada a la aplicación. 

![App Screenshot](https://articulateusercontent.com/rise/courses/jSGud9W-D22TdGkSv-msUDQAxPqEDGTV/aM6TUMAIiHuYOPAL.png)


## 🛠 Skills
Javascript, MongoDb, Express, Docker 


En desarrollo. 


## Deploy

Api desplegada en Google Cloud. 

```bash
  http://34.31.33.170:8000
```

Para pruebas

```bash
GET
  http://34.31.33.170:8000/characters
  http://34.31.33.170:8000/films
  http://34.31.33.170:8000/planets

POST
/characters 
BODY
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

/films 
BODY
 title: String,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: Date,
  characters: [{ type: String, ref: "Characters" }],
  planets: [{ type: String, ref: "Planets" }],

/planets
BODY
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

```