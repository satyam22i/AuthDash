import express from "express";
import User from "../models/Users.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/profile", auth, async (req, res) => {
  const user = await User.findById(req.userId).select("-password");
  res.json(user);
});

export default router;
