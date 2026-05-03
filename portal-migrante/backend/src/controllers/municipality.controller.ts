import { Request, Response } from "express";
import mongoose from "mongoose";
import Municipality from "../models/municipality.model";

export const getMunicipalities = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const territory = req.query.territory as string | undefined;
    const q = req.query.q as string | undefined;

    const filter: any = { status: "active" };

    if (territory && ["alava", "bizkaia", "gipuzkoa"].includes(territory)) {
      filter.territory = territory;
    }

    if (q && q.trim()) {
      filter.$or = [
        { name: { $regex: q.trim(), $options: "i" } },
        { municipio: { $regex: q.trim(), $options: "i" } },
        { comarca: { $regex: q.trim(), $options: "i" } },
        { address: { $regex: q.trim(), $options: "i" } },
        { email: { $regex: q.trim(), $options: "i" } },
      ];
    }

    const data = await Municipality.find(filter).sort({ name: 1 });

    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to fetch municipalities",
      error: error.message,
    });
  }
};

export const getMunicipalityDetails = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const value = req.params.idOrSlug;
    const filter = mongoose.Types.ObjectId.isValid(value)
      ? { _id: value, status: "active" }
      : { slug: value, status: "active" };

    const item = await Municipality.findOne(filter);

    if (!item) {
      res.status(404).json({ message: "Municipality not found" });
      return;
    }

    res.status(200).json(item);
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to fetch municipality",
      error: error.message,
    });
  }
};
