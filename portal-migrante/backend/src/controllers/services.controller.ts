// src/controllers/services.controller.ts
import { Request, Response } from "express";
import Service from "../models/service.model";

// GET /api/services?category=salud&municipality=Bilbao
export async function listServices(req: Request, res: Response) {
  const { category, municipality } = req.query as {
    category?: string;
    municipality?: string;
  };

  const filter: any = {};
  if (category) filter.category = category;
  if (municipality) filter.municipality = municipality;

  const items = await Service.find(filter)
    .sort({ createdAt: -1 })
    .limit(500);

  res.json({ count: items.length, items });
}

// POST /api/services
export async function createService(req: Request, res: Response) {
  const { title, category, municipality, url, phone, lang } = req.body;

  if (!title || !category) {
    return res.status(400).json({ ok: false, error: "title and category are required" });
  }

  const created = await Service.create({
    title,
    category,
    municipality,
    url,
    phone,
    lang,
  });

  res.status(201).json(created);
}
