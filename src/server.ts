import express from "express";
import dotenv from "dotenv";
import router from "./routes/index";
import { config } from "./config";

dotenv.config();

const app = express();

const port = config.port || 3000;

app.use(express.json());
app.use(router);
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${port}`);
});
