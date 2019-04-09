# liri-node-app1

Liri is a Language Interpentation and Recognition Interface that gives you data back.

Liribot commandline interface using node

In terminal =

node liri.js "concertThis" "Beyonce"

Will provide the followig data:
-Name of the venue
-Venue location
-Date of the Event (use moment to format this as "MM/DD/YYYY")

node liri.js "spotifyThisSong" "Diamonds"
Will provide the followig data:

-Artist(s)name
-The song's name
-A preview link of the song from Spotify
-The album that the song is from

node liri.js "movieThis" "Batman"
Will provide the following data:

-Title of the movie.
-Year the movie came out.
-IMDB Rating of the movie.
-Rotten Tomatoes Rating of the movie.
-Country where the movie was produced.
-Language of the movie.
-Plot of the movie.
-Actors in the movie.

node liri.js doWhatItSays
Will provide the following data:

-pull in data that is shown in random.txt
