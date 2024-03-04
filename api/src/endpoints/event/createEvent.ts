import { Request, Response } from "express";

export const createEventEndpoint = (req: Request, res: Response) => {
  res.status(201).send("User Login Endpoint");
};
