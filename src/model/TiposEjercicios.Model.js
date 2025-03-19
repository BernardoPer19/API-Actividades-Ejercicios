import { pool } from "../db/db.js";

export class ModeladoEjercicios {
  static async verEjercicios() {
    try {
      const { rows } = await pool.query("SELECT * FROM tipo_ejercicio_tb");
      return rows;
    } catch (error) {
      console.error("Error al obtener los datos de la base de datos:", error);
      throw error;
    }
  }

  static async verEjerciciosPorId(id) {
    try {
      const { rows } = await pool.query(
        "SELECT * FROM tipos_ejercicio_tb WHERE id = $1",
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

  static async añadirEjercicios(id, nombre, desc) {
    try {
      const { rows } = await pool.query(
        "INSERT INTO tipos_ejercicio_tb (id, nombre, desc) VALUES ($1, $2, $3) RETURNING *",
        [id, nombre, desc]
      );
      return rows[0];
    } catch (error) {
      console.error("Error al agregar el ejercicio:", error);
      throw error;
    }
  }

  static async eliminarEjercicios(id) {
    try {
      const { rows } = await pool.query(
        "DELETE FROM tipos_ejercicio_tb WHERE id = $1 RETURNING *",
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

  static async actualizarEjercicios(id, nombre, desc) {
    try {
      const { rowCount } = await pool.query(
        "UPDATE tipos_ejercicio_tb SET nombre = $1, desc = $2 WHERE id = $3",
        [nombre, desc, id]
      );
      if (rowCount === 0) {
        throw new Error("No se encontró el ejercicio con el ID proporcionado.");
      }
      return { message: "Ejercicio actualizado correctamente" };
    } catch (error) {
      console.error("Error al actualizar el ejercicio:", error);
      throw error;
    }
  }
}
