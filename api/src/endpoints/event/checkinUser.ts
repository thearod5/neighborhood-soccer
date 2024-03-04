
import { Request, Response } from "express";

export const checkInUserEndpoint = (req: Request, res: Response) => {
	res.status(201).send("Event registration endpoint");
};
