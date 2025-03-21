import express from "express";
import { routerEjercicio } from "./routes/CardioEjercicios.routes.js";
import { routerGrupoMuscular } from "./routes/GruposMusculares.routes.js";
import { RutasEjerciciosGym } from "./routes/GymEjercicios.routes.js";

const app = express();
app.use(express.json()); 

app.use("/grupoMuscular", routerGrupoMuscular);
app.use("/ejercicio-cardio", routerEjercicio);
app.use("/ejercicios", RutasEjerciciosGym);

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
