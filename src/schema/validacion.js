import z from "zod";

export const tiposYGruposEsquema = z.object({
  nombre: z
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(50, "El nombre no puede exceder los 50 caracteres")
    .trim(),
  desc: z
    .string()
    .min(3, "La descripción debe tener al menos 3 caracteres")
    .max(255, "La descripción no puede exceder los 255 caracteres")
    .trim(),
});
export const validarTiposYGruposEsquema = (input) => {
  return tiposYGruposEsquema.partial().safeParse(input);
};
