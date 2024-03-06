import { Cart, validateCart } from "../models/cart.js";

export function createCart(req, res) {
  try {
    const { error } = validateCart(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let cart = new Cart({ ...req.body });
    cart.save((err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log("Error while creating a new cart:", err);
        res.status(422).send("Error while creating a new cart: " + err.message);
      }
    });
  } catch (err) {
    console.log("Error in createCart:", err);
    res.status(500).send("Internal Server Error: " + err.message);
  }
}
