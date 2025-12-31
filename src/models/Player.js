const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: String,
  category: String,
  imageUrl: String,
  country: String
});

module.exports = mongoose.model("Player", playerSchema);
