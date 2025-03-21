import { pool } from "../db/db.js";

export class modeloGrupouscular {
  static async verGrupos() {
    try {
      const { rows } = await pool.query("SELECT * FROM grupo_muscular_tb");
      return rows;
    } catch (error) {
      console.error("error al obtener datos en el modelo", error);
    }
  }

  static async verGrupoPorId(muscular_id) {
    try {
      const { rows } = await pool.query(
        "SELECT * FROM grupo_muscular_tb WHERE muscular_id = $1",
        [muscular_id]
      );
      return rows[0];
    } catch (error) {
      console.error("error al obtener datos por id en el modelo", error);
    }
  }

  static async crearGrupoMuscular(muscular_id, nombre, desc) {
    try {
      const { rows } = await pool.query(
        'INSERT INTO grupo_muscular_tb(muscular_id, nombre, "desc") VALUES ($1, $2, $3) RETURNING *',
        [muscular_id, nombre, desc]
      );
      return rows[0]; // Devuelve la fila insertada
    } catch (error) {
      console.error("Error al crear datos en el modelo:", error);
      throw new Error(
        `Error al insertar en la base de datos: ${error.message}`
      ); // Proporciona más detalles sobre el error
    }
  }

  static async eliminarGrupoMuscular(id) {
    try {
      const { rowCount } = await pool.query(
        "DELETE FROM grupo_muscular_tb WHERE muscular_id = $1",
        [id]
      );
      if (rowCount === 0) {
        throw new Error("No se encontró el grupo muscular con el ID proporcionado.");
      }
    } catch (error) {
      console.error("Error al eliminar datos en el modelo:", error);
      throw new Error(`Error al eliminar en la base de datos: ${error.message}`);
    }
  }
  
  static async actualizarGrupoMuscular(nombre, desc, id) {
    try {
      const { result } = await pool.query(
        "UPDATE grupo_muscular_tb SET nombre = $1 , desc = $2 WHERE muscular_id = $3",
        [nombre, desc, id]
      );

      if (result.affectedRows === 0) {
        return null;
      }

      const { rows } = await pool.query(
        "SELECT * FROM grupo_muscular_tb WHERE id = $1",
        [id]
      );

      return rows[0];
    } catch (error) {}
  }
}
