# :muscle: **API de Registro de Actividades de Ejercicio**

## :clipboard: **Funcionalidades**
La API permitirá gestionar las actividades de ejercicio de los usuarios. A continuación, se describen las funcionalidades principales:

- **Registrar ejercicios realizados** por los usuarios, incluyendo:
  - Tipo de ejercicio (correr, nadar, gimnasio, etc.).
  - Duración del ejercicio (en minutos).
  - Calorías quemadas.
  
- **Generar informes de progreso** de actividad física, como el total de calorías quemadas por semana o mes.

- **Permitir actualizaciones y eliminación** de registros de ejercicios.

- **Filtrar actividades** por:
  - Tipo de ejercicio.
  - Fecha de realización (por rango de fechas).

---

## :gear: **Tecnologías Utilizadas**
Esta API está construida con las siguientes tecnologías:

- **PostgreSQL**: Para almacenar los registros de actividades físicas.
- **Express + MVC**: Para estructurar la API siguiendo el patrón Modelo-Vista-Controlador.
- **Zod**: Para la validación de datos de entrada (como asegurarse de que la duración del ejercicio es un número positivo).
- **Middlewares**: Para la autenticación de usuarios y la protección de rutas (por ejemplo, usando JWT para asegurar que solo usuarios autenticados puedan registrar o actualizar ejercicios).

---

## :rocket: **Métodos HTTP**

Los métodos disponibles para interactuar con la API son los siguientes:

### 1. `GET /exercises`
Obtiene todas las actividades de ejercicio registradas en el sistema.

**Respuesta exitosa:**
```json
[
  {
    "id": 1,
    "user_id": 101,
    "exercise_type": "Running",
    "duration": 30,
    "calories_burned": 300,
    "date": "2025-03-17"
  },
  {
    "id": 2,
    "user_id": 102,
    "exercise_type": "Swimming",
    "duration": 45,
    "calories_burned": 500,
    "date": "2025-03-18"
  }
]
#   A P I - A c t i v i d a d e s - E j e r c i c i o s  
 