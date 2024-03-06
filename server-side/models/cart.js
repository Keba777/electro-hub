import mongoose from "mongoose";
import Joi from "joi";

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
  total: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

const validateCart = (cart) => {
  const schema = Joi.object({
    user: Joi.objectId(),
    items: Joi.array().items(
      Joi.object({
        product: Joi.objectId(),
        quantity: Joi.number().min(1),
      })
    ),
    total: Joi.number(),
  });

  return schema.validate(cart);
};

export { Cart, validateCart };
