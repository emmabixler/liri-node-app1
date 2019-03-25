console.log("this is loaded");

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// /spotify id
// 48cec1099fd8422fb0c245a0de4aa557
