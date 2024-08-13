import { Request, Response } from "express";

export const index = (req: Request, res: Response) => {
  res.send({ message: "Hello from items" });
};
