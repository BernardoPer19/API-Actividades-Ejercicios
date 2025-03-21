import { pool } from "../db/db.js";

export class modeloEjerciciosCardio {
  static async verEjercicios() {
    try {
      const { rows } = await pool.query("SELECT * FROM ejercicios_cardio_tb");
      return rows;
    } catch (error) {
      console.error("Error al obtener datos en el modelo", error);
    }
  }

  static async verEjercicioId(id) {
    try {
      const { rows } = await pool.query(
        "SELECT * FROM ejercicios_cardio_tb WHERE id_cardio = $1",
        [id]
      );
      return rows[0]; 
    } catch (error) {
      console.error("Error al obtener datos por id en el modelo", error);
    }
  }

  static async crearEjercicioCardio(
    nombre,
    desc,
    muscular_id,
    tipo_ejercicio_id,
    dificultad,
    duracion,
    img_url
  ) {
    try {
      // const { rows: grupo_muscular } = await pool.query('SELECT 1 FROM grupo_muscular_tb WHERE grupo_muscular_id = $1', [grupo_muscular_id]);

      // const { rows: tipoEjercicio } = await pool.query('SELECT 1 FROM tipo_ejercicio_tb WHERE tipo_ejercicio_id = $1', [tipo_ejercicio_id]);
      console.log("Longitud de nombre:", nombre.length);

      const { rows } = await pool.query(
        `INSERT INTO ejercicios_cardio_tb(nombre, "desc", muscular_id, tipo_ejercicio_id, dificultad, duracion, img_url) 
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [
          nombre,
          desc,
          muscular_id,
          tipo_ejercicio_id,
          dificultad,
          duracion,
          img_url,
        ]
      );

      return rows[0];
    } catch (error) {
      console.error("Error al crear datos en el modelo:", error);
      throw new Error(
        `Error al insertar en la base de datos: ${error.message}`
      );
    }
  }

  static async eliminarEjercicioCardio(id) {
    try {
      const { rowCount } = await pool.query(
        "DELETE FROM ejercicios_cardio_tb WHERE id_cardio = $1",
        [id]
      );
      if (rowCount === 0) {
        return null;
      }
      return rowCount;
    } catch (error) {
      console.error("Error al eliminar datos en el modelo", error);
    }
  }

  static async actualizarEjercicioCardio(
    nombre,
    desc,
    muscular_id,
    tipo_ejercicio_id,
    dificultad,
    duracion,
    img_url,
    id_cardio
  ) {
    try {
      const { rowCount } = await pool.query(
        `UPDATE ejercicios_cardio_tb 
        SET nombre = $1, "desc" = $2, muscular_id = $3, tipo_ejercicio_id = $4, dificultad = $5, duracion = $6, img_url = $7 
        WHERE id_cardio = $8`,
        [
          nombre,
          desc,
          muscular_id,
          tipo_ejercicio_id,
          dificultad,
          duracion,
          img_url,
          id_cardio
        ]
      );

      if (rowCount === 0) {
        return null;
      }

      const { rows } = await pool.query(
        "SELECT * FROM ejercicios_cardio_tb WHERE id_cardio = $1",
        [id_cardio]
      );
      return rows[0];
    } catch (error) {
      console.error("Error al crear datos en el modelo:", error);
      throw new Error(
        `Error al insertar en la base de datos: ${error.message}`
      );
    }
  }
}
