import mongoose from "mongoose";
import Joi from "joi";

const allowedProductTypes = ["smartphone", "tablet", "laptop", "watch"];

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  brand: { type: String },
  color: { type: String },
  storage: { type: String },
  image: { type: String, required: true },
  isFeatured: { type: Boolean, default: false },
  type: { type: String, required: true, enum: allowedProductTypes },
});

const Product = mongoose.model("Product", productSchema);

export function validateProduct(product) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(150).required(),
    price: Joi.number(),
    description: Joi.string().required(),
    brand: Joi.string(),
    color: Joi.string(),
    storage: Joi.string(),
    image: Joi.string(),
    isFeatured: Joi.boolean(),
    type: Joi.string()
      .valid(...allowedProductTypes)
      .required(),
  });

  return schema.validate(product);
}

export default Product;
