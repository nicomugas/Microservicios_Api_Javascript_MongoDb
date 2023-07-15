const express = require("express")
const morgan = require("morgan")
const {createProxyMiddleware} = require("http-proxy-middleware");

const PORT = 8000;

const app = express();
app.use(morgan("dev"));


app.use("/characters", createProxyMiddleware({
	//target:"http://starwars-characters:8001",
	target:"http://localhost:8001/",
	changeOrigin:true
})),

app.use("/films", createProxyMiddleware({
	//target:"http://starwars-films:8002",
	target:"http://localhost:8002/",
	changeOrigin:true
})),

app.use("/planets", createProxyMiddleware({
	//target:"http://starwars-planets:8003",
	target:"http://localhost:8003/",
	changeOrigin:true
})),

app.use("/database", createProxyMiddleware({
	//target:"http://starwars-database:8004",
	target:"http://localhost:8004/",
	changeOrigin:true
}))


app.listen(PORT, ()=> {
    console.log(`Gateway on port ${PORT}`);
});