const express = require("express");
const app = express();
const Mercado = require("./src/models/Mercado");

const db = require("./src/config/db");

const { routes } = require("./src/routes/index");

app.use(express.json());
app.use(routes);

app.listen(8080, () => {
  console.log("Porta iniciado em 8080");
});
