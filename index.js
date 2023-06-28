import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/authRoutes.js";
import shopRoute from "./routes/shopRoutes.js";

import { dbConnect } from "./config/db.js";
dotenv.config();
const port = process.env.PORT || 8002;

//BLQr0hViTatJw5Hb
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoute);
app.use("/api/shop", shopRoute)

app.get("/", (req, res) => {
  res.send("Silence is Gold");
});

dbConnect();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
