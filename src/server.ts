import express from "express";
import dotenv from "dotenv";
import router from "./routes/index";

dotenv.config();

const app = express();

app.use(express.json());
app.use(router);
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
