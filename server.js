/*
server.js
carpeta server
npm init -y (package.json)
Editarr package.json -> "start": node -> nodemon
npm install express mongoose cors
Carpetas en server -> config, controllers, models, routes
Abrir nueva pestaña de terminal y colocar npx create-react-app client
Terminal 1 (Servidor- Express)

Terminal 2 (Cliente - React) ->
    cd client


SERVER
config (mongoose.config)
models (documentos.model)
controllers
routes
server,js

Clients 
npx create-react-app- client
npm axios react-router-dom
*/

const express = require("express");
const app = express();

const cors = require("cors");

//Usar json y obtener datos de URL
app.use( express.json(), express.urlencoded({ extended: true }) );

//Permite accesar desde un origen distinto
app.use(
    cors({
        //URL front end
        origin:"http://localhost:3000"
    })
)

//Iniciar DB
require("./server/config/mongoose.config")

//Importamos rutas
const misRutas = require("./server/routes/producto.routes");
misRutas(app);

//Ejecutar server
app.listen(8000, () => console.log ("Servidor listo!"));
