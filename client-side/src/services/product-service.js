import apiClient from "./api-client";

class ProductService {
  getAllProducts() {
    const controller = new AbortController();
    const request = apiClient.get("/products", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  deleteProduct(_id) {
    return apiClient.delete("/products/" + _id);
  }

  createProduct(product) {
    return apiClient.post("/products", product, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  updateProduct(blog) {
    return apiClient.put("/products/" + blog._id, blog);
  }
}

export default new ProductService();
