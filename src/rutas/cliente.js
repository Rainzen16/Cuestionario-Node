const express = require("express");
const controller = require("../controllers/controlCliente");
const router = express.Router();

//ruta que utiliza la funcion list de controller
router.get("/", controller.Indice);
router.get("/preguntas", controller.list);
router.post("/add", controller.save);
router.get("/delete/:id", controller.delete);

router.get("/update/:id", controller.edit);
router.post("/update/:id", controller.update);

module.exports = router;
