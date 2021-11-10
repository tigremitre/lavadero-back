import { Router } from "express";
import lavaderoCtrl from "../controllers/servicios.controllers";

const router = Router();

router
  .route("/")
  .get(lavaderoCtrl.listarServicio)
  .post(lavaderoCtrl.crearServicio);

router
  .route("/:id")
  .delete(lavaderoCtrl.eliminarServicio)
  .get(lavaderoCtrl.obtenerServicio)
  .put(lavaderoCtrl.editarServicio);

export default router;
