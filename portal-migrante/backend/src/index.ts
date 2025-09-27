// src/index.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { connectDB, disconnectDB } from "./config/db";

const app = express();

const PORT = Number(process.env.PORT) || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/portal";

app.use(express.json());
app.use(cors({ origin: FRONTEND_URL, credentials: true }));

import router from "./routes";
import notFound from "./middlewares/notFound";
import errorHandler from "./middlewares/errorHandler";

app.use("/api", router);
app.use(notFound);
app.use(errorHandler);

async function bootstrap() {
  // اتصال قاعدة البيانات
  await connectDB(MONGO_URI);

  // تشغيل الخادم بعد الاتصال
  const server = app.listen(PORT, () => {
    console.log(`🚀 API running on http://localhost:${PORT}`);
  });

  // إغلاقات سليمة
  const shutdown = async (signal: string) => {
    console.log(`\n${signal} received. Closing gracefully...`);
    server.close(async () => {
      await disconnectDB();
      process.exit(0);
    });
  };
  process.on("SIGINT", () => shutdown("SIGINT"));
  process.on("SIGTERM", () => shutdown("SIGTERM"));
}

bootstrap().catch((err) => {
  console.error("❌ Bootstrap error:", err);
  process.exit(1);
});
