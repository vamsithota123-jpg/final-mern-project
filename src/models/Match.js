const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  round: {
    type: String,
    enum: ["Quarterfinal", "Semifinal", "Final"]
  },
  player1: String,
  player2: String,
  score: String,
  winner: String
});

module.exports = mongoose.model("Match", matchSchema);
