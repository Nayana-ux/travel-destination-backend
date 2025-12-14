const express = require("express");
const User = require("../models/User");

const router = express.Router();

/* =========================
   ADD TO WISHLIST
========================= */
router.post("/add", async (req, res) => {
  try {
    const { userId, destinationId } = req.body;

    if (!userId || !destinationId) {
      return res.status(400).json({ message: "User ID and Destination ID required" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Prevent duplicates
    if (user.wishlist.includes(destinationId)) {
      return res.status(400).json({ message: "Destination already in wishlist" });
    }

    user.wishlist.push(destinationId);
    await user.save();

    res.json({ message: "Added to wishlist successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/* =========================
   GET USER WISHLIST
========================= */
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
      .populate("wishlist");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user.wishlist);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
