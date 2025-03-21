
import { validarEjercicios } from "../schema/validacionCardio.js";

export class controllerEjericiosCardio {
  constructor ({modeloEjerciciosCardio}){
    this.modeloEjerciciosCardio = modeloEjerciciosCardio;
  }

  obtenerEjercicios = async (req, res) => {
    try {
      const result = await  this.modeloEjerciciosCardio.verEjercicios();
      res.status(200).json(result);
    } catch (error) {
      res
        .status(500)
        .json({ message: "error al obtener los ejercicios ", error: error });
    }
  };

  

   obtenerEjercicioPorId = async (req, res) => {
    try {
      const { id } = req.params;

      const result = await  this.modeloEjerciciosCardio.verEjercicioId(id);
      if (!result) {
        return res
          .status(400)
          .json({ message: " no  se encontro el ejercicio" });
      }

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({
        message: "error al obtener el ejercicio por id",
        error: error,
      });
    }
  };

   crearEjercicioCardio = async (req, res) => {
    try {
      const vali = validarEjercicios(req.body);
      if (!vali.success) {
        return res.status(500).json({ error: JSON.parse(vali.error.message) });
      }

      const {
        nombre,
        desc,
        muscular_id,
        tipo_ejercicio_id,
        dificultad,
        duracion,
        img_url,
      } = vali.data;

      const result = await  this.modeloEjerciciosCardio.crearEjercicioCardio(
        nombre,
        desc,
        muscular_id,
        tipo_ejercicio_id,
        dificultad,
        duracion,
        img_url
      );

      return res.status(200).json(result);
    } catch (error) {
      res.status(400).json({
        message: "error al agregar el cardio",
        error: error.message,
      });
    }
  };

   crearEjercicioCardio = async (req, res) => {
    try {
      const { success, data, error } = validarEjercicios(req.body);
      if (!success)
        return res.status(500).json({ error: JSON.parse(error.message) });

      const result = await  this.modeloEjerciciosCardio.crearEjercicioCardio(
        ...Object.values(data)
      );
      res.status(200).json(result);
    } catch (error) {
      res
        .status(400)
        .json({ message: "error al agregar el cardio", error: error.message });
    }
  };

   eliminarEjercicioCardio = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await  this.modeloEjerciciosCardio.eliminarEjercicioCardio(id);
      if (!result) {
        return res.status(400).json({ message: "no se encontro el ejercicio" });
      }

      res.status(200).json({ message: "se elimino el ejercicio" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "error al eliminar el ejercicio", error: error });
    }
  };

   actualizarEjercicioCardio = async (req, res) => {
    const { id } = req.params;
    try {
      
      const vali = validarEjercicios(req.body);
      if (!vali.success) {
        return res.status(400).json({ error: JSON.parse(vali.error.message) });
      }
  
     
      const {
        nombre,
        desc,
        muscular_id,
        tipo_ejercicio_id,
        dificultad,
        duracion,
        img_url,
      } = vali.data;
  
      
      if (nombre.length > 100) {
        return res.status(400).json({ message: "El nombre excede el límite de 100 caracteres." });
      }
  
      if (desc.length > 200) {
        return res.status(400).json({ message: "La descripción excede el límite de 200 caracteres." });
      }
  
      
      const result = await  this.modeloEjerciciosCardio.actualizarEjercicioCardio({
        id,
        nombre,
        desc,
        muscular_id,
        tipo_ejercicio_id,
        dificultad,
        duracion,
        img_url,
      });
  
      if (!result) {
        return res.status(404).json({ message: "No se encontró el ejercicio" });
      }
  
      res.status(200).json({ message: "Se actualizó el ejercicio", result });
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar el ejercicio", error: error.message });
    }
  };
  
}
   
 
