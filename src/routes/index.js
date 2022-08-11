const { Router } = require("express");

const MercadoController = require("../Controllers/MercadoController");

const routes = Router();

//rotas
routes.get("/mercado", MercadoController.GetAll);
routes.get("/mercado/:product", MercadoController.GetOne);
routes.post("/mercado", MercadoController.store);
routes.put("/mercado/:product", MercadoController.Update);
routes.delete("/mercado/:product", MercadoController.delete);

module.exports = { routes };
