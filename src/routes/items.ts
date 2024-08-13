import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send({ message: "Hello from items" });
});

export default router;
