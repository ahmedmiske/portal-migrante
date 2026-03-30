// src/routes/services.route.ts
import { Router } from "express";
import {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService,
} from "../controllers/services.controller";

const router = Router();

router.route("/").get(getServices).post(createService);
router.route("/:id").get(getServiceById).put(updateService).delete(deleteService);

export default router;