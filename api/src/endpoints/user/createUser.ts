import { Request, Response } from "express";
import { UserSchema } from "../../db/userSchema";

export const createUserEndpoint = async (req: Request, res: Response) => {
  const newUser = await UserSchema.create(req.body);
  res.status(201).json(newUser);
};
