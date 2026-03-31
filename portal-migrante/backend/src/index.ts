// src/index.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import { connectDB, disconnectDB } from "./config/db";
import router from "./routes";
import notFound from "./middlewares/notFound";
import errorHandler from "./middlewares/errorHandler";

dotenv.config();

const app = express();

const PORT = Number(process.env.PORT) || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/portal";

app.use(helmet());
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.status(200).json({
    message: "Portal Migrante API is running",
    status: "ok",
  });
});

app.get("/api", (_req, res) => {
  res.status(200).json({
    message: "Portal Migrante API",
    status: "ok",
  });
});

app.use("/api", router);

app.use(notFound);
app.use(errorHandler);

async function bootstrap(): Promise<void> {
  await connectDB(MONGO_URI);

  const server = app.listen(PORT, () => {
    console.log(`🚀 API running on http://localhost:${PORT}`);
  });

  const shutdown = async (signal: string) => {
    console.log(`\n${signal} received. Closing gracefully...`);
    server.close(async () => {
      await disconnectDB();
      process.exit(0);
    });
  };

  process.on("SIGINT", () => {
    void shutdown("SIGINT");
  });

  process.on("SIGTERM", () => {
    void shutdown("SIGTERM");
  });
}

bootstrap().catch((err) => {
  console.error("❌ Bootstrap error:", err);
  process.exit(1);
});