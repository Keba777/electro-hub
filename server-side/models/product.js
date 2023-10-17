import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  brand: { type: String },
  color: { type: String },
  storage: { type: String },
  images: { type: String },
  isFeatured: { type: Boolean, default: false },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
