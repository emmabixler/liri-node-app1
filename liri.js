require("dotenv").config();
//concert-this
// spotify-this-song
// movie-this
// do-what-it-says

//dontenv is to hide the keys

//list of varibales
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");
var request = require("request");

var bandsInTown = keys.bandsInTowmn;
var nameSong = keys.nameSong;
console.log("my log", process.argv);
var inputRequest = process.argv[2];
var liriReturn = process.argv.slice(3).join("");
var selection = "";

//app logic
switch (inputRequest) {
  case "concertThis":
    concertThis(liriReturn);
    break;
  case "spotifyThisSong":
    spotifyThisSong(liriReturn);
    break;
  case "movieThis":
    movieThis(liriReturn);
    break;
  case "doWhatItSays":
    doWhatItSays(liriReturn);
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
    keys.nameSong;
  axios.get(url).then(function(response) {
    console.log(response.data);
    for (var i = 0; i < response.data.length; i++) {
      console.log();
    }
  });
}
//spotify
function spotifyThisSong(songName) {
  if (songName === "") {
    songName = "Headlines";
  }
  spotify.search(
    {
      type: "track",
      query: songName
    },
    function(err, data) {
      if (err) {
        // console.log("error occured:" + err);
        // return;
        var songName = data.tracks.items[0];
        for (var i = 0; i < songName.length; i++) {
          console.log(i);
          console.log("Artist:" + songName[i].Artist[0].name);
          console.log("Name of Song:" + songName[i].NameOfSong);
          console.log("Link of Song: " + songName[i].LinkOfSong);
          console.log("Album: " + songName[i].Album);
        }
      }
    }
  );
}

// movie request

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
  movieThis();
} else if (liriReturn == "spotifyThisSong") {
  spotifyThisSong();
}

function movieThis(movieRequest) {
  var selection = movieRequest;
  var url =
    "http://www.omdbapi.com/?t=" + selection + "&y=&plot=short&apikey=trilogy";
  axios.get(url).then(function(response) {
    console.log(response.data);
    for (var i = 0; i < response.data.length; i++) {
      console.log("Title: " + response.data.Title);
      console.log("Release Year: " + response.data.Year);
      console.log("IMBD ratings: " + response.data.imdbRating);
      console.log("Country: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
      console.log("Rotten Tomatoes:" + response.data.Ratings[1].Value);
    }
  });
}

//do what it says
function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function(err, data) {
    console.log(data);
    var dataArr = data.split(",");
  });
}
