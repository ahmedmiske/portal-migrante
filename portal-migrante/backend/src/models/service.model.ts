// src/models/service.model.ts
import mongoose, { Schema, InferSchemaType } from "mongoose";

const ServiceSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true }, // salud | vivienda | educacion | legal | empleo | idioma
    municipality: { type: String },
    url: { type: String },
    phone: { type: String },
    lang: { type: [String], default: [] },      // ["es","en","ar"]
  },
  { timestamps: true }
);

export type ServiceDoc = InferSchemaType<typeof ServiceSchema>;
export default mongoose.model<ServiceDoc>("Service", ServiceSchema);
