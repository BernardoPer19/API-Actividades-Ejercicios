import { modeloGrupouscular } from "../model/grupoMuscular.model.js";
import { validarTiposYGruposEsquema } from "../schema/validacion.js";

export class controllerGrupoMuscular {
  static getGrupos = async (req, res) => {
    try {
      const result = await modeloGrupouscular.verGrupos();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({
        message: "error al obtener los grupos musculares ",
        error: error,
      });
    }
  };

  static getGruposPorId = async (req, res) => {
    try {
      const { id } = req.params;

      const result = await modeloGrupouscular.verGrupoPorId(id);
      if (!result) {
        return res
          .status(400)
          .json({ message: "no  se encontro el grupo muscular" });
      }

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({
        message: "error al obtener el grupo muscular por id",
        error: error.message,
      });
    }
  };

  static crearGrupoMuscular = async (req, res) => {
    try {
      const vali = validarTiposYGruposEsquema(req.body);
      if (!vali.success) {
        return res.status(500).json({ error: JSON.parse(vali.error.message) });
      }
      const { muscular_id, nombre, desc } = vali.data;

      const nuevoMusculo = await modeloGrupouscular.crearGrupoMuscular(
        muscular_id,
        nombre,
        desc
      );

      return res.status(200).json(nuevoMusculo);
    } catch (error) {
      res.status(400).json({
        message: "error al agregar el grupo muscular",
        error: error.message,
      });
    }
  };

  static eliminarGrupoMuscular = async (req, res) => {
    try {
      const { id } = req.params;
       await modeloGrupouscular.eliminarGrupoMuscular(id);
    

      res.status(200).json({ message: "se elimino el grupoMuscular" });
    } catch (error) {
      res.status(400).json({
        message: "error al agregar el grupo muscular",
        error: error.message,
      });
    }
  };

  static mejorarGrupoMuscular = async (req, res) => {
    const { id } = req.params;
    try {
      const vali = validarTiposYGruposEsquema(req.body);
      if (!vali.success) {
        return res.status(500).json({ error: JSON.parse(vali.error.message) });
      }

      const result = await modeloGrupouscular.actualizarGrupoMuscular(
        id,
        vali.data
      );
      if (!result) {
        return res.status(404).json({ message: "no se encontro la cita" });
      }
      res.status(200).json({ message: "se actualizo la cita" });
    } catch (error) {
      res.status(500).json({
        message: "error al actualizar el grupo muscular",
        error: error,
      });
    }
  };
}
