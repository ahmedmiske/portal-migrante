import { Router } from "express";
import healthRouter from "./health.route";
import servicesRouter from "./services.route";
import usersRouter from "./users.route";

const router = Router();

router.use("/health", healthRouter);
router.use("/services", servicesRouter);
router.use("/users", usersRouter);

export default router;
