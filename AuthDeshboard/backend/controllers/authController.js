import User from "../models/User.js"; 
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    
    const user = await User.create({
      name,
      email,
      password,
    });

   
    if (!process.env.JWT_SECRET) {
        console.error("ERROR: JWT_SECRET is missing in .env");
        return res.status(500).json({ message: "Server Configuration Error" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Register Error:", error.message); 
    res.status(500).json({ message: error.message });
  }
};