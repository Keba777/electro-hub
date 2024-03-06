import { User, validate } from "../models/user.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(404).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });

    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already exists" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    res.status(200).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
};
