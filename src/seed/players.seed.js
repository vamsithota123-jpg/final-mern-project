const mongoose = require("mongoose");
require("dotenv").config();
const Player = require("../models/Player");

mongoose.connect(process.env.MONGO_URI);

const players = [
  // ===== MEN'S SINGLES (4) =====
  {
    name: "Lakshya Sen",
    category: "Mens Singles",
    imageUrl: "https://img.bwfbadminton.com/image/upload/t_96_player_profile_portrait/v1697434141/assets/players/thumbnail/57945.png",
    country: "India"
  },
  {
    name: "Kidambi Srikanth",
    category: "Mens Singles",
    imageUrl: "https://img.bwfbadminton.com/image/upload/t_96_player_profile_portrait/v1753841947/assets/players/thumbnail/77262.png",
    country: "India"
  },
  {
    name: "HS Prannoy",
    category: "Mens Singles",
    imageUrl: "https://img.bwfbadminton.com/image/upload/t_96_player_profile_portrait/v1697439785/assets/players/thumbnail/61427.png",
    country: "India"
  },
  {
    name: "Sameer Verma",
    category: "Mens Singles",
    imageUrl: "https://img.bwfbadminton.com/image/upload/t_96_player_profile_portrait/v1732493690/assets/players/thumbnail/66513.png",
    country: "India"
  },

  // ===== WOMEN'S SINGLES (4) =====
  {
    name: "PV Sindhu",
    category: "Womens Singles",
    imageUrl: "https://img.bwfbadminton.com/image/upload/t_96_player_profile_portrait/v1697439785/assets/players/thumbnail/61427.png",
    country: "India"
  },
  {
    name: "Saina Nehwal",
    category: "Womens Singles",
    imageUrl: "https://img.bwfbadminton.com/image/upload/t_96_player_profile_portrait/v1697437149/assets/players/thumbnail/77832.png",
    country: "India"
  },
  {
    name: "Aakarshi Kashyap",
    category: "Womens Singles",
    imageUrl: "https://img.bwfbadminton.com/image/upload/t_96_player_profile_portrait/v1658132498/assets/players/thumbnail/81609.png",
    country: "India"
  },
  {
    name: "Malvika Bansod",
    category: "Womens Singles",
    imageUrl: "https://img.bwfbadminton.com/image/upload/t_96_player_profile_portrait/v1748582728/assets/players/thumbnail/87442.png",
    country: "India"
  },

  // ===== MEN'S DOUBLES (8) =====
  {
    name: "Satwiksairaj Rankireddy",
    category: "Mens Doubles",
    imageUrl: "https://img.bwfbadminton.com/image/upload/t_96_player_profile_portrait/v1736832980/assets/players/thumbnail/90531.png",
    country: "India"
  },
  {
    name: "Chirag Shetty",
    category: "Mens Doubles",
    imageUrl: "https://img.bwfbadminton.com/image/upload/t_96_player_profile_portrait/v1736841863/assets/players/thumbnail/55414.png",
    country: "India"
  },
  {
    name: "MR Arjun",
    category: "Mens Doubles",
    imageUrl: "https://img.bwfbadminton.com/image/upload/t_96_player_profile_portrait/v1636447436/assets/players/thumbnail/61731.png",
    country: "India"
  },
  {
    name: "Dhruv Kapila",
    category: "Mens Doubles",
    imageUrl: "https://img.bwfbadminton.com/image/upload/t_96_player_profile_portrait/v1732493690/assets/players/thumbnail/66513.png",
    country: "India"
  },
  {
    name: "Krishna Prasad",
    category: "Mens Doubles",
    imageUrl: "https://img.bwfbadminton.com/image/upload/t_96_player_profile_portrait/v1697771308/assets/players/thumbnail/72435.png",
    country: "India"
  },
  {
    name: "Vishnuvardhan Goud",
    category: "Mens Doubles",
    imageUrl: "https://img.bwfbadminton.com/image/upload/t_96_player_profile_portrait/v1697771565/assets/players/thumbnail/70500.png",
    country: "India"
  },
  {
    name: "Sai Pratheek",
    category: "Mens Doubles",
    imageUrl: "https://img.bwfbadminton.com/image/upload/t_96_player_profile_portrait/v1671091837/assets/players/thumbnail/99181.png",
    country: "India"
  },
  {
    name: "Karan George",
    category: "Mens Doubles",
    imageUrl: "https://img.bwfbadminton.com/image/upload/t_96_player_profile_portrait/v1636508099/assets/players/thumbnail/68870.png",
    country: "India"
  },

  // ===== MIXED DOUBLES (4) =====
  {
    name: "Rohan Kapoor",
    category: "Mixed Doubles",
    imageUrl: "https://img.bwfbadminton.com/image/upload/t_96_player_profile_portrait/v1671091837/assets/players/thumbnail/99181.png",
    country: "India"
  },
  {
    name: "N Sikki Reddy",
    category: "Mixed Doubles",
    imageUrl: "https://img.bwfbadminton.com/image/upload/t_96_player_profile_portrait/v1671092214/assets/players/thumbnail/59237.png",
    country: "India"
  },
  {
    name: "Ashwini Ponnappa",
    category: "Mixed Doubles",
    imageUrl: "https://img.bwfbadminton.com/image/upload/t_96_player_profile_portrait/v1620708562/assets/players/thumbnail/79198.png",
    country: "India"
  },
  {
    name: "Tanisha Crasto",
    category: "Mixed Doubles",
    imageUrl: "https://img.bwfbadminton.com/image/upload/t_96_player_profile_portrait/v1636508099/assets/players/thumbnail/68870.png",
    country: "India"
  }
];

const seedPlayers = async () => {
  await Player.deleteMany(); // optional
  await Player.insertMany(players);
  console.log("✅ 24 Players inserted into MongoDB");
  process.exit();
};

seedPlayers();
