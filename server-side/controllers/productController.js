import Product from "../models/product.js";
import { validateProduct } from "../models/product.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort("name");
    res.send(products);
  } catch (error) {
    res.status(500).send("Could not fetch products.");
  }
};

const createProduct = async (req, res) => {
  // Validate the request body
  const { error } = validateProduct(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const image = req.file.filename;

  // Create a new product object with the image filename
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    brand: req.body.brand,
    color: req.body.color,
    storage: req.body.storage,
    image: image,
    isFeatured: req.body.isFeatured,
  });

  try {
    // Save the product to the database
    await product.save();
    res.send(product);
  } catch (err) {
    res.status(500).send("Could not save the product.");
  }
};

const updateProduct = async (req, res) => {
  const { error } = validateProduct(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        brand: req.body.brand,
        color: req.body.color,
        storage: req.body.storage,
        isFeatured: req.body.isFeatured,
      },
      { new: true }
    );

    if (!product)
      return res.status(400).send("Product with the given ID was not found");

    res.send(product);
  } catch (error) {
    res.status(500).send("Could not update the product.");
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);

    if (!product)
      return res.status(400).send("Product with the given ID was not found");

    res.send(product);
  } catch (error) {
    res.status(500).send("Could not delete the product.");
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product)
      return res.status(400).send("Product with the given ID was not found");

    res.send(product);
  } catch (error) {
    res.status(500).send("Could not fetch the product.");
  }
};

export {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
};
