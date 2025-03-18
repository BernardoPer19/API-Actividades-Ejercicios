import z from 'zod';

export const tiposYGruposEsquema = z.object({
    nombre: z.string().min(3),
    descripcion: z.string().min(3)
})

export const validarEjercicios = ((input) =>{
    return tiposYGruposEsquema.safeParse(input);
})

export const validarPartesEjercicios = ((input) =>{
    return tiposYGruposEsquema.partial().safeParse(input);
})