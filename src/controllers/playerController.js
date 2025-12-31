const Player = require("../models/Player");

exports.getPlayers = async (req, res) => {
  const players = await Player.find();
  res.json(players);
};
