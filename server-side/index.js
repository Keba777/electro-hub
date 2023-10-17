import express from "express";
import cors from "cors";
import connectDB from "./db/db.js";
import router from "./routes/productRoutes.js";
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/product", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
