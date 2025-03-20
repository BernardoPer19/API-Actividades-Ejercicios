import { pool } from "../db/db.js";

export class modeloEjerciciosCardio {
  
  static async verEjercicios() {
    try {
      const { rows } = await pool.query('SELECT * FROM ejercicios_cardio_tb');
      return rows;
    } catch (error) {
      console.error('Error al obtener datos en el modelo', error);
    }
  }

  static async verEjercicioId(id) {
    try {
      const { rows } = await pool.query('SELECT * FROM ejercicios_cardio_tb WHERE id = $1', [id]);
      return rows[0];  // Devuelve el primer resultado de la consulta
    } catch (error) {
      console.error('Error al obtener datos por id en el modelo', error);
    }
  }

  static async crearEjercicioCardio(nombre, desc, grupo_muscular_id, tipo_ejercicio_id, dificultad, duracion_recomendada, imagen_url) {
    try {
      const { rows: grupo_muscular } = await pool.query('SELECT 1 FROM grupo_muscular_tb WHERE grupo_muscular_id = $1', [grupo_muscular_id]);

      const { rows: tipoEjercicio } = await pool.query('SELECT 1 FROM tipo_ejercicio_tb WHERE tipo_ejercicio_id = $1', [tipo_ejercicio_id]);

 
      const { rows } = await pool.query(
        `INSERT INTO ejercicios_cardio_tb(nombre, desc, grupo_muscular_id, tipo_ejercicio_id, dificultad, duracion_recomendada, imagen_url) 
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [nombre, desc, grupo_muscular_id, tipo_ejercicio_id, dificultad, duracion_recomendada, imagen_url]
      );
      
      return rows[0];
    } catch (error) {
      console.error('Error al crear datos en el modelo', error);
    }
  }

  static async eliminarEjercicioCardio(id) {
    try {
      const { result } = await pool.query('DELETE FROM ejercicios_cardio_tb WHERE id = $1', [id]);
      if (result.affectedRows === 0) {
        return null; // No se eliminó nada
      }
      return result;
    } catch (error) {
      console.error('Error al eliminar datos en el modelo', error);
    }
  }

  static async actualizarEjercicioCardio(nombre, desc, grupo_muscular_id, tipo_ejercicio_id, dificultad, duracion_recomendada, imagen_url, id) {
    try {
      const { result } = await pool.query(
        `UPDATE ejercicios_cardio_tb 
        SET nombre = $1, desc = $2, grupo_muscular_id = $3, tipo_ejercicio_id = $4, dificultad = $5, duracion_recomendada = $6, imagen_url = $7 
        WHERE id = $8`,
        [nombre, desc, grupo_muscular_id, tipo_ejercicio_id, dificultad, duracion_recomendada, imagen_url, id]
      );

      if (result.affectedRows === 0) {
        return null; // No se actualizó nada
      }

      const { rows } = await pool.query('SELECT * FROM ejercicios_cardio_tb WHERE id = $1', [id]);
      return rows[0];
    } catch (error) {
      console.error('Error al actualizar datos en el modelo', error);
    }
  }
}
