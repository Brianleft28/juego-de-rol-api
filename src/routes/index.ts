import { readdirSync } from "fs";
import { Router } from "express";
import "dotenv/config";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanName = (name: string) => {
  return name.split(".")[0];
};
readdirSync(PATH_ROUTER).forEach((file) => {
  const name = cleanName(file);
  if (name === "index") return;
  import(`./${name}`).then((module) => {
    console.log(`Route http://localhost:3000/api/v1/${name} loaded`);
    router.use(`/api/v1/${name}`, module.default);
  });
});

export default router;
