import { controllerGrupoMuscular } from "../controllers/controllerGrupoMuscular.controller.js";
import { Router } from "express";


export const iniciarGrupoMuscular = ({modeloGrupouscular}) =>{
    
     const routerGrupoMuscular = Router();

     const controllerGrupo = new controllerGrupoMuscular ({modeloGrupouscular})
   
    routerGrupoMuscular.get('/', controllerGrupo.getGrupos);
    routerGrupoMuscular.get('/:id', controllerGrupo.getGruposPorId);
    routerGrupoMuscular.post('/', controllerGrupo.crearGrupoMuscular);
    routerGrupoMuscular.put('/:id', controllerGrupo.mejorarGrupoMuscular);
    routerGrupoMuscular.delete('/:id', controllerGrupo.eliminarGrupoMuscular);

    return routerGrupoMuscular;
}


