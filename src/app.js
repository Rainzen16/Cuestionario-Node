//modulos y dependencias
const express = require("express");
const path = require("path");
const mysql = require("mysql");
const myConn = require("express-myconnection");

//rutas importadas desde 'cliente'
const rutasCliente = require("./rutas/cliente");

//defino express en 'app' para poder usar los metodos
const app = express();

// creacion de red y defino a EJS como motor de plantilla
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Middlewares

app.use(
  myConn(
    mysql,
    {
      host: "localhost",
      user: "root",
      password: "",
      port: 3306,
      database: "basededatospreguntas",
    },
    "single"
  )
);

app.use(express.urlencoded({ extended: false }));

//Rutas
app.use("/", rutasCliente);

//inicia el servidor
app.listen(app.get("port"), () => {
  console.log("Server en el puerto 3000");
});
