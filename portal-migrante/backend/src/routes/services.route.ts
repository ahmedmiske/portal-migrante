import { Router } from "express";
import { listServices, createService } from "../controllers/services.controller";

const router = Router();

// GET /api/services?category=salud
router.get("/", listServices);

// POST /api/services   (تجريبية للتطوير)
router.post("/", createService);

export default router;
