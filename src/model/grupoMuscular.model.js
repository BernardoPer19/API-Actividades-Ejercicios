import { pool } from "../db/db.js"; 

export class modeloGrupouscular {
    static async verGrupos () {
        try {
            const {result} = await pool.query('SELECT * FROM grupo_muscular_tb');
             return result;
        } catch (error) {
            console.error('error al obtener datos en el modelo', error);
        }
    }

    static async  verGrupoPorId (id){
        try {
            const {result} = await pool.query('SELECT * FROM grupo_muscular_tb WHERE id = $1',[id]);
            return result[0];
        } catch (error) {
            console.error('error al obtener datos por id en el modelo', error);
        }
    }

    static async cerarGrupoMuscular (nombre,desc){
        try {
            const {rows} = await pool.query('INSERT INTO grupo_muscular_tb(nombre,desc) VALUES ($1,$2)',[nombre,desc]);

            return rows;
        } catch (error) {
            console.error('error al crear datos en el modelo', error);
        }
    }

    static async eliminarGrupoMuscular (id) {
        try {
            const {result} = await pool.query('DELETE FROM  grupo_muscular_tb WHERE id = $1',[id])
            return result.affectedRows >0;
        } catch (error) {
            console.error('error al eliminar datos en el modelo', error);
        }
    }

    static async actualizarGrupoMuscular (nombre,desc,id) {
        try {
            const {result} = await pool.query('UPDATE grupo_muscular_tb SET nombre = $1 , desc = $2 WHERE id = $3',[nombre,desc,id])
            
            if(result.affectedRows === 0){return null}

            const {rows} = await pool.query('SELECT * FROM grupo_muscular_tb WHERE id = $1',[id])
            
            return rows[0];
        } catch (error) {
            
        }
    }

}