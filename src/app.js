import express from "express";

import { iniciarEjercicioCardio } from "./routes/CardioEjercicios.routes.js";
import { modeloEjerciciosCardio } from "./model/ejerciciosCardio.model.js";


import { iniciarGrupoMuscular } from "./routes/GruposMusculares.routes.js";
import { modeloGrupouscular } from "./model/grupoMuscular.model.js";

import { RutasEjerciciosGym } from "./routes/GymEjercicios.routes.js";

const app = express();
app.use(express.json()); 

app.use("/grupoMuscular", iniciarGrupoMuscular({modeloGrupouscular}));
app.use("/ejercicio-cardio", iniciarEjercicioCardio({modeloEjerciciosCardio}));
app.use("/ejercicios", RutasEjerciciosGym);

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
