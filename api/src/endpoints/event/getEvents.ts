import { Request, Response } from "express";

export const getEventsEndpoint = (req: Request, res: Response) => {
	res.status(200).send("List events endpoint");
};
