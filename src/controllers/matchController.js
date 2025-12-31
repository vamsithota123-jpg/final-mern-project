const Match = require("../models/Match");

exports.saveMatch = async (req, res) => {
  const match = await Match.create(req.body);
  res.json(match);
};

exports.getMatchesByRound = async (req, res) => {
  const matches = await Match.find({ round: req.params.round });
  res.json(matches);
};
