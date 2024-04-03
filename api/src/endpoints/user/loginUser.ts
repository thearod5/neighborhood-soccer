import { UserInfo } from "domain/user";
import { Request, Response } from "express";

export const loginUserEndpoint = (req: Request, res: Response) => {
  const user: UserInfo = {
    id: "1234-1234",
    username: "thearod5",
    email: "email@domain.com",
    isAdmin: false,
  };
  res.status(200).send(user);
};
