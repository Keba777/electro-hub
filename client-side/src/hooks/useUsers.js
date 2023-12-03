import { useEffect, useState } from "react";
import UserService from "../services/user-service";
import { CanceledError } from "axios";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const { request, cancel } = UserService.getAllUsers();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  const createUser = (newUser) => {
    const originalUsers = [...users];

    UserService.createUser(newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
        console.log("User created successfully!", res.data);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        setUsers(originalUsers);
      });
  };

  const updateUser = (updatedUser) => {
    const originalUsers = [...users];

    UserService.updateUser(updatedUser)
      .then((res) => {
        const updatedUsers = users.map((user) =>
          user._id === res.data._id ? res.data : user
        );
        setUsers(updatedUsers);
        console.log("User updated successfully!", res.data);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const deleteUser = (user) => {
    const originalUsers = [...users];
    setUsers(users.filter((b) => b._id !== user._id));

    UserService.deleteUser(user._id).catch(() => {
      setError("Failed to delete user.");
      setUsers(originalUsers);
    });
  };

  return {
    users,
    error,
    isLoading,
    setUsers,
    setError,
    createUser,
    updateUser,
    deleteUser,
  };
};

export default useUsers;
