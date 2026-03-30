// src/routes/organizations.route.ts
import { Router } from "express";
import {
  createOrganization,
  getOrganizations,
  getOrganizationById,
  updateOrganization,
  deleteOrganization,
} from "../controllers/organization.controller";

const router = Router();

router.route("/").get(getOrganizations).post(createOrganization);
router.route("/:id")
  .get(getOrganizationById)
  .put(updateOrganization)
  .delete(deleteOrganization);

export default router;