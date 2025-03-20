
import { Router } from 'express';
import { ControllersEjerciciosGym } from '../controllers/ControllersEjerciciosGym.controller.js';
export const RutasEjercicios = Router();

RutasEjercicios.get("/",ControllersEjerciciosGym.mostrarEjercicios);
RutasEjercicios.get("/:id",ControllersEjerciciosGym.mostrarEjerciciosId);
RutasEjercicios.delete("/:id", ControllersEjerciciosGym.eliminarEjercicios);
RutasEjercicios.post("/",ControllersEjerciciosGym.agregarEjercicios);





// router.put("/:id",editarEjercicio);



