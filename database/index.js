const server = require('./src/server')

const PORT = 8004;
server.listen(PORT, ()=> {
    console.log(`Service DATABASES running on PORT ${PORT}`);
})