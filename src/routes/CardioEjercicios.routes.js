import { controllerEjericiosCardio } from "../controllers/controllerEjerciciosCardio.controller.js";
import { Router } from "express";


 export const routerEjercicio = Router();

 routerEjercicio.get('/', controllerEjericiosCardio.obtenerEjercicios);
 routerEjercicio.get('/:id', controllerEjericiosCardio.obtenerEjercicioPorId); 
 routerEjercicio.post('/', controllerEjericiosCardio.crearEjercicioCardio);
 routerEjercicio.put('/:id', controllerEjericiosCardio.actualizarEjercicioCardio);
 routerEjercicio.delete('/:id', controllerEjericiosCardio.eliminarEjercicioCardio);


 
