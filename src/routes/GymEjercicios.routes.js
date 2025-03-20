
import { Router } from 'express';
import { ControllersEjerciciosGym } from '../controllers/ControllersEjerciciosGym.controller.js';
export const RutasEjerciciosGym = Router();

RutasEjercicios.get("/",ControllersEjerciciosGym.mostrarEjercicios);
RutasEjercicios.get("/:id",ControllersEjerciciosGym.mostrarEjerciciosId);
RutasEjercicios.delete("/:id", ControllersEjerciciosGym.eliminarEjercicios);
RutasEjercicios.post("/",ControllersEjerciciosGym.agregarEjercicios);
RutasEjercicios.put("/:id",ControllersEjerciciosGym.actualizarEjercicios);



