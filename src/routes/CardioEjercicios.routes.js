import { controllerEjericiosCardio } from "../controllers/controllerEjerciciosCardio.controller.js";
import { Router } from "express";

export const iniciarEjercicioCardio = ({modeloEjerciciosCardio}) =>{

    const routerEjercicio = Router();

    const controllerEjercicio = new controllerEjericiosCardio ({modeloEjerciciosCardio})
   
    routerEjercicio.get('/', controllerEjercicio.obtenerEjercicios);
    routerEjercicio.get('/:id', controllerEjercicio.obtenerEjercicioPorId); 
    routerEjercicio.post('/', controllerEjercicio.crearEjercicioCardio);
    routerEjercicio.put('/:id', controllerEjercicio.actualizarEjercicioCardio);
    routerEjercicio.delete('/:id', controllerEjercicio.eliminarEjercicioCardio);

    return routerEjercicio;
}


 
