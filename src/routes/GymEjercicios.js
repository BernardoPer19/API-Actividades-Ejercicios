const { Router } = require("express");

const router = Router();

router.get("/",verEjercicios);
router.post("/",añadirEjercicio);
router.put("/:id",editarEjercicio);
router.delete("/:id", );

module.exports = router;
