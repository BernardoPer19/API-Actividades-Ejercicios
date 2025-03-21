import { pool } from "../db/db.js";

export class ModeladoEjerciciosGym {
  static async verEjerciciosGym() {
    try {
      const { rows } = await pool.query("SELECT * FROM ejercicios_gym_tb");
      return rows;
    } catch (error) {
      console.error("Error al obtener los datos de la base de datos:", error);
      throw error;
    }
  }

  static async verEjerciciosGymPorId(id) {
    try {
      const { rows } = await pool.query(
        "SELECT * FROM ejercicios_gym_tb WHERE id = $1",
        [id]
      );
      if (rows.length === 0) {
        throw new Error("No se encontró el ejercicio con el ID proporcionado.");
      }
      return rows[0];
    } catch (error) {
      console.error("Error al obtener los datos del ejercicio por ID:", error);
      throw error;
    }
  }

  static async añadirEjerciciosGym(
    nombre,
    desc,
    muscular_id,
    tipo_ejercicio_id,
    dificultad,
    img
  ) {
    try {
      const { rows: grupoMuscular } = await pool.query(
        "SELECT 1 FROM ejercicios_gym_tb WHERE muscular_id = $1",
        [muscular_id]
      );
      const { rows: tipoEjercicio } = await pool.query(
        "SELECT 1 FROM ejercicios_gym_tb WHERE tipo_ejercicio_id = $1",
        [tipo_ejercicio_id]
      );

      if (grupoMuscular.length === 0 || tipoEjercicio.length === 0) {
        throw new Error("El ejercicio o tipo de ejercicio no existe.");
      }

      const query = `
      INSERT INTO ejercicios_gym_tb (nombre, "desc", muscular_id, tipo_ejercicio_id, dificultad, img)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
    `;

      const { rows } = await pool.query(query, [
        nombre,
        desc,
        muscular_id,
        tipo_ejercicio_id,
        dificultad,
        img,
      ]);

      return rows[0];
    } catch (error) {
      console.error("Error al agregar el ejercicio:", error);
      throw error;
    }
  }

  static async eliminarEjerciciosGym(id) {
    try {
      const { rows } = await pool.query(
        "DELETE FROM ejercicios_gym_tb WHERE id = $1 RETURNING *",
        [id]
      );
      if (rows.length === 0) {
        throw new Error("No se encontró el ejercicio con el ID proporcionado.");
      }
      return rows[0];
    } catch (error) {
      console.error("Error al eliminar el ejercicio:", error);
      throw error;
    }
  }

  static async actualizarEjerciciosGym(
    id,
    nombre,
    desc,
    muscular_id,
    tipo_ejercicio_id,
    dificultad,
    img
  ) {
    try {
      const query = `
        UPDATE ejercicios_gym_tb 
        SET nombre = $1, "desc" = $2, muscular_id = $3, tipo_ejercicio_id = $4, dificultad = $5, img = $6
        WHERE id = $7 
        RETURNING *;
      `;

      const { rows, rowCount } = await pool.query(query, [
        nombre,
        desc,
        muscular_id,
        tipo_ejercicio_id,
        dificultad,
        img,
        id,
      ]);

      if (rowCount === 0) {
        throw new Error("No se encontró el ejercicio con el ID proporcionado.");
      }

      return rows[0];
    } catch (error) {
      console.error("Error al actualizar el ejercicio:", error);
      throw error;
    }
  }
}
