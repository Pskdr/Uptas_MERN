import express from "express";
import {
  registrar,
  autenticar,
  confirmar,
} from "../controllers/usuariosController.js";

const router = express.Router();

//Autenticación, Registro y Confirmación de Usuario

router.post("/", registrar); //Crea un nuevo usuario
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);

export default router;
