import mongoose from "mongoose";
import Joi from "joi";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  brand: { type: String },
  color: { type: String },
  storage: { type: String },
  image: { type: String, required: true },
  isFeatured: { type: Boolean, default: false },
});

const Product = mongoose.model("Product", productSchema);

export function validateProduct(blog) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(150).required(),
    price: Joi.number(),
    description: Joi.string().required(),
    brand: Joi.string(),
    color: Joi.string(),
    storage: Joi.string(),
    image: Joi.string(),
    isFeatured: Joi.boolean(),
  });

  return schema.validate(blog);
}

export default Product;
