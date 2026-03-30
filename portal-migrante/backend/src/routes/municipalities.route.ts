import { Router } from "express";
import {
  getMunicipalities,
  getMunicipalityBySlug,
} from "../controllers/municipality.controller";

const router = Router();

router.get("/", getMunicipalities);
router.get("/:slug", getMunicipalityBySlug);

export default router;