const express = require("express");
const { saveMatch, getMatchesByRound } = require("../controllers/matchController");

const router = express.Router();

router.post("/", saveMatch);
router.get("/:round", getMatchesByRound);

module.exports = router;
