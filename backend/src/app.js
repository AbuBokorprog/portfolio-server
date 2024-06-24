import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import { globalError } from "./app/middleware/global-error.js";
import { notFound } from "./app/middleware/notFound.js";
import router from "./app/route/index.js";

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome to my portfolio");
});
app.use("/api", router);

app.use(globalError);
app.use(notFound);
export default app;
