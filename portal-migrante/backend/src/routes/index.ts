import { Router } from "express";
import healthRoute from "./health.route";
import usersRoute from "./users.route";
import servicesRoute from "./services.route";
import organizationsRoute from "./organizations.route";
import municipalitiesRoute from "./municipalities.route";

const router = Router();

router.use("/health", healthRoute);
router.use("/users", usersRoute);
router.use("/services", servicesRoute);
router.use("/organizations", organizationsRoute);
router.use("/municipalities", municipalitiesRoute);

export default router;