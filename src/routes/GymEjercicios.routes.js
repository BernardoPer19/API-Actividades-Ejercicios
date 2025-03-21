
import { Router } from 'express';
import { ControllersEjerciciosGym } from '../controllers/ControllersEjerciciosGym.controller.js';
export const RutasEjerciciosGym = Router();

RutasEjerciciosGym.get("/",ControllersEjerciciosGym.mostrarEjercicios);
RutasEjerciciosGym.get("/:id",ControllersEjerciciosGym.mostrarEjerciciosId);
RutasEjerciciosGym.delete("/:id", ControllersEjerciciosGym.eliminarEjercicios);
RutasEjerciciosGym.post("/",ControllersEjerciciosGym.agregarEjercicios);
RutasEjerciciosGym.put("/:id",ControllersEjerciciosGym.actualizarEjercicios);



