import { Request, Response } from "express";

export const loginUserEndpoint = (req: Request, res: Response) => {
  res.status(200).send("User Login Endpoint");
};
