import { controllerGrupoMuscular } from "../controller/controllerGrupoMuscular.controller.js";
import { Router } from "express";


 export const routerGrupoMuscular = Router();

 routerGrupoMuscular.get('/', controllerGrupoMuscular.getGrupos);
 routerGrupoMuscular.get('/:id', controllerGrupoMuscular.getGruposPorId);
 routerGrupoMuscular.post('/', controllerGrupoMuscular.crearGrupoMuscular);
 routerGrupoMuscular.put('/:id', controllerGrupoMuscular.mejorarGrupoMuscular);
 routerGrupoMuscular.delete('/:id', controllerGrupoMuscular.eliminarGrupoMuscular);


