import express from 'express';
import { routerEjercicio } from './routes/CardioEjercicios.routes.js';
import { routerGrupoMuscular } from './routes/GruposMusculares.routes.js';

const app = express();

app.use('/grupoMuscular',routerGrupoMuscular)
app.use('/ejercicio-cardio',routerEjercicio)






app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
