import { Request, Response } from "express";
import { UserSchema } from "../../db/userSchema";

export const hasUserEndpoint = async (req: Request, res: Response) => {
  const { username } = req.params; 

  const user = await UserSchema.findOne({
    where: { username: username }
  });

  const hasUser = user != null; // true if user exists, false otherwise

  res.status(200).json({ hasUser: hasUser });
};
