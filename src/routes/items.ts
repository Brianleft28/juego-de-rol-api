import { Router } from "express";
import { index } from "../controllers/itemsController";

const router = Router();

router.get("/", index); // OBTENER TODOS LOS ITEMS

export default router;
