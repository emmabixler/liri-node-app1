require("dotenv").config();
//concert-this
// spotify-this-song
// movie-this
// do-what-it-says

//dontenv is to hide the keys
require("dotenv").config();

//list of varibales
var keys = require("./keys.js");
var fs = require("fs");
// var Spotify = require("node-spotify-api");
// var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");
var request = require("request");
var inputRequest = process.argv[2];
var liriReturn = process.argv.slice(3).join("");
var bandsInTown = keys.bandsInTowmn;
var nameSong = keys.nameSong;

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
function movie() {
  var queryURL =
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
