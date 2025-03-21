import z from "zod";

const validarEjerciciosEsquema = z.object({
  nombre: z
    .string()
    .trim()
    .max(100, "El nombre no puede exceder los 100 caracteres"),
  desc: z
    .string()
    .trim()
    .max(200, "La descripción no puede exceder los 200 caracteres"),
  muscular_id: z.number(),
  tipo_ejercicio_id: z.number(),
  dificultad: z.string().trim().max(10, "Máximo 10 caracteres"),
  duracion: z.number(),
  img_url: z.string().trim().max(250, "URL demasiado larga"),
});

export const validarEjercicios = (input) => {
  return validarEjerciciosEsquema.partial().safeParse(input);
};
