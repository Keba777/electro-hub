import { useEffect, useState } from "react";
import productService from "../services/product-service";
import { CanceledError } from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const { request, cancel } = productService.getAllProducts();
    request
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  const createProduct = (newProduct) => {
    const originalProducts = [...products];

    productService
      .createProduct(newProduct)
      .then((res) => {
        setProducts([res.data, ...products]);
        console.log("product created successfully!", res.data);
      })
      .catch((error) => {
        console.error("Error creating product:", error);
        setProducts(originalProducts);
      });
  };

  const updateProduct = (updatedProduct) => {
    const originalProducts = [...products];

    productService
      .updateProduct(updatedProduct)
      .then((res) => {
        const updatedProducts = products.map((product) =>
          product._id === res.data._id ? res.data : product
        );
        setProducts(updatedProducts);
        console.log("product updated successfully!", res.data);
      })
      .catch((err) => {
        setError(err.message);
        setProducts(originalProducts);
      });
  };

  const deleteProduct = (product) => {
    const originalProducts = [...products];
    setProducts(products.filter((b) => b._id !== product._id));

    productService.deleteproduct(product._id).catch(() => {
      setError("Failed to delete product.");
      setProducts(originalProducts);
    });
  };

  return {
    products,
    error,
    isLoading,
    setProducts,
    setError,
    createProduct,
    updateProduct,
    deleteProduct,
  };
};

export default useProducts;
