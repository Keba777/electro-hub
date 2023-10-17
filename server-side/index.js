import express from "express";
import cors from "cors";
import connectDB from "./db/db.js";
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
