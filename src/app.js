import { RutasEjercicios } from "./routes/GymEjercicios.js";

const app = express();
app.use(express.json())
app.use("/ejercicios", RutasEjercicios);

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
