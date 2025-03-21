import { z } from "zod";

const ejercicioSchema = z.object({
  nombre: z.string().min(1),
  desc: z.string().min(1),
  muscular_id: z.number().int().positive(),
  tipo_ejercicio_id: z.number().int().positive(),
  dificultad: z.enum(["Baja", "Moderado", "Alta"]),
  img: z.string().url().or(z.string().min(1)), 
});


export const validarEjercicios = (input) => {
  return ejercicioSchema.partial().safeParse(input);
};

export default ejercicioSchema;
