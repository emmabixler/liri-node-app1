require("dotenv").config();
//concert-this
// spotify-this-song
// movie-this
// do-what-it-says

//dontenv is to hide the keys

//list of varibales
var keys = require("./keys.js");
var fs = require("fs");
var spotify = new Spotify(keys.spotify);
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
var request = require("request");

var bandsInTown = keys.bandsInTowmn;
var nameSong = keys.nameSong;

var inputRequest = process.argv[2];
var liriReturn = process.argv.slice(3).join("");
var selection = "";
//app logic
switch (inputRequest) {
  case "concertThis":
    concertThis(liriReturn);
    break;
  case "spotify-this":
    spotifyThisSong(liriReturn);
    break;
  case "movieThis":
    movieThis();
    break;
  case "do-this":
    doThis(liriReturn);
    break;
  default:
    console.log("hii");
}
//concert request
function concertThis(userRequest) {
  var artist = userRequest;
  var url =
    "https://rest.bandsintown.com/artists/" +
    artist +
    "/events?app_id=codingbootcamp" +
    keys.bandsInTown;
  axios.get(url).then(function(response) {
    // console.log(response.data)
    for (var i = 0; i < response.data.length; i++) {
      console.log();
    }
  });
}

//movie request

for (var i = 3; i < inputRequest.length; i++) {
  if (i > 3 && i < inputRequest.length) {
    selection = selection + "+" + inputRequest[i];
  } else {
    selection += inputRequest[i];
  }
}
console.log(selection);
console.log(liriReturn);
if (liriReturn == "movieThis") {
  movie();
} else if (liriReturn == "spotify-this-song") {
  song();
}

function movie() {
  "http:www.omdbapi.com/?t=" + selection + "&y=&plot=short&apikey=trilogy";
  axios.get(queryUrl).then(function(response) {
    console.log(response);
    console.log("Title: " + response.data.Title);
    console.log("Release Year: " + response.data.Year);
    console.log("IMBD ratings: " + response.data.imdbRating);
    console.log("Country: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);
    console.log("Rotten Tomatoes:" + response.data.Ratings[1].Value);
  });
}

//do what it says
