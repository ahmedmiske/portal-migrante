// src/config/db.ts
import mongoose from "mongoose";

export async function connectDB(uri: string) {
  mongoose.set("strictQuery", true);
  await mongoose.connect(uri);
  console.log("✅ MongoDB connected");
}

export async function disconnectDB() {
  await mongoose.disconnect();
  console.log("🛑 MongoDB disconnected");
}
