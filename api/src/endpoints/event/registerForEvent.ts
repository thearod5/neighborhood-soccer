import { Request, Response } from "express";

export const registerForEventEndpoint = (req: Request, res: Response) => {
	res.status(201).send("Event registration endpoint");
};
