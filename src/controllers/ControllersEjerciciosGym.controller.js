import { ModeladoEjerciciosGym } from "../model/EjerciciosGym.Model.js";
import { validarEjercicios } from '../schema/validacionEjercicios.js';

export class ControllersEjerciciosGym {
  static async mostrarEjercicios(req, res) {
    try {
      const result = await ModeladoEjerciciosGym.verEjerciciosGym();
      return res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: `Error al ver los Ejercicios: ${error.message}` });
    }
  }

  static async mostrarEjerciciosId(req, res) {
    try {
      const { id } = req.params;
      const result = await ModeladoEjerciciosGym.verEjerciciosGymPorId(id);
      return res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: `Error al ver los Ejercicios por id: ${error.message}`,
      });
    }
  }

  static async agregarEjercicios(req, res) {
    try {
      const validarDatos = validarEjercicios(req.body); 
  
      if (!validarDatos.success) {
        return res.status(400).json({
          message: "Datos inválidos",
          errors: validarDatos.error.format(), 
        });
      }

      
      const { nombre, desc, muscular_id, tipo_ejercicio_id, dificultad, img } = validarDatos.data;
 
      const nuevoEjercicio = await ModeladoEjerciciosGym.añadirEjerciciosGym(
        nombre,
        desc,
        muscular_id,
        tipo_ejercicio_id,
        dificultad,
        img
      );
  
      return res.status(201).json(nuevoEjercicio); 
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: `Error al agregar un nuevo ejercicio aaaaaa: ${error.message}`,
      });
    }
  }

  static async eliminarEjercicios(req, res) {
    try {
      const { id } = req.params;
      const eliminarEjercicio = await ModeladoEjerciciosGym.eliminarEjerciciosGym(id); // Usamos await para esperar a que termine
      return res.json(eliminarEjercicio);
    } catch (error) {
      res.status(500).json({
        message: `Error al eliminar un ejercicio: ${error.message}`,
      });
    }
  }
}
