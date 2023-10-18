import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import connectDB from "./db/db.js";
import router from "./routes/productRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

connectDB();

app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use("/api/products", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
