import express from 'express';
import { pool } from './db/db.js';

const app = express();






app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
