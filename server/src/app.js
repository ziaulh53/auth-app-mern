import express, { json } from "express";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";

const app = express();

const port = 5000;

// load env file
dotenv.config();

// connect database
connectDB();

app.use(json());
app.use(cors());
app.use(helmet());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
