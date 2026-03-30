// src/controllers/user.controller.ts
import { Request, Response } from "express";
import User from "../models/user.model";

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
};

export const getUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find()
      .populate("organizationId", "name type slug status verified")
      .sort({ createdAt: -1 });

    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to fetch users",
      error: error.message,
    });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.params.id).populate(
      "organizationId",
      "name type slug status verified"
    );

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to fetch user",
      error: error.message,
    });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).populate("organizationId", "name type slug status verified");

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({
      message: "Failed to update user",
      error: error.message,
    });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to delete user",
      error: error.message,
    });
  }
};