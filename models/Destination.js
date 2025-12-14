const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  climate: {
    type: String,
    required: true
  },
  budget: {
    type: String,
    required: true
  },
  activities: {
    type: [String],
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  bestTime: {
    type: String
  },
  image: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model("Destination", destinationSchema);
