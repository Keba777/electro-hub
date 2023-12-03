import apiClient from "./api-client";

class UserService {
  getAllUsers() {
    const controller = new AbortController();
    const request = apiClient.get("/users", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  deleteUser(_id) {
    return apiClient.delete("/users/" + _id);
  }

  createUser(user) {
    return apiClient.post("/users", user);
  }

  updateUser(blog) {
    return apiClient.put("/users/" + blog._id, blog);
  }
}

export default new UserService();
