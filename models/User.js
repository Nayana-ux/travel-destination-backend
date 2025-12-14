const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },

  // ✅ Wishlist stores destination IDs
  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Destination"
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
