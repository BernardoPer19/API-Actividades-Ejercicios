import { modeloEjerciciosCardio } from "../model/ejerciciosCardio.model.js";
import { validarTiposYGruposEsquema } from "../schema/validacion.js";


export class controllerEjericiosCardio {
    static  obtenerEjercicios  = async (req,res) =>{
        try {
            const result = await modeloEjerciciosCardio.verEjercicios();
            result.status(200).json(result);
        } catch (error) {
            res.status(500).json({message : 'error al obtener los ejercicios ', error:error})
        }
    }

    static  obtenerEjercicioPorId = async (req,res) =>{
        try {
            const {id} = req.params;

            const result = await modeloEjerciciosCardio.verEjercicioId(id);
            if(!result){
                return res.status(400).json({message: ' no  se encontro el ejercicio'});
            }

            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({message : 'error al obtener el ejercicio por id', error:error})
        }
    }
        

    static crearEjercicioCardio = async (req,res) =>{
        try {
            const vali = validarTiposYGruposEsquema(req.body);
            if(!vali.success){
                return res.status(500).json({error: JSON.parse(vali.error.message)})
            }
             await modeloEjerciciosCardio.crearEjercicioCardio(vali.data);

             res.status(200).json({message: 'se creo el ejercicio'})
        } catch (error) {
            res.status(500).json({message : 'error al agregar el ejecicio', error:error})
        }
    }

    static eliminarEjercicio = async (req,res) =>{
        try {
            const {id} = req.params;
            const result = await modeloEjerciciosCardio.eiminarEjercicioCardio(id);
            if(!result){
                return res.status(400).json({message: 'no se encontro el ejercicio'});
            }

            res.status(200).json({message : 'se elimino el ejercicio'})
        } catch (error) {
            res.status(500).json({message : 'error al eliminar el ejercicio', error:error})
        }
    }

    static actualizarEjercicio = async (req,res) =>{
        const {id} = req.params;
        try {
            const vali = validarTiposYGruposEsquema(req.body)
            if(!vali.success){
                return res.status(500).json({error: JSON.parse(vali.error.message)})
            }

            const result = await modeloEjerciciosCardio.actualizarEjercicioCardio(vali.data, id);
            if(!result) {
                return res.status(404).json({message : 'no se encontro el ejercicio'});
            }
            res.status(200).json({message : "se actualizo el ejercicio"});
        } catch (error) {
            res.status(500).json({message : 'error al actualizar el ejercicio', error:error})
        }
    }

}