//Defining classes

//Library class constructor func
function Library(name,creator){
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

//Playlsist class func
function Playlist(name){
  this.name = name;
  this.tracks = [];
}

//Track class func
function Track(title,artist,album,rating,length){
  this.title = title;
  this.artist = artist;
  this.album = album;
  this.length = length;

  if(rating >=1 || rating <=5){
    this.rating = rating;
  }else {
    console.log("Invalid argument: Rating must be an intetger between 1-5")
  }
}

//Methods acting on Library, added to its prototype

Library.prototype.addPlaylist = function(playlistObject){
  this.playlists.push(playlistObject);
}

Library.prototype.printTracks = function(){
  this.playlists.forEach(function(playlist){
    playlist.tracks.forEach(function(track){
      console.log(track.title);
    })
  })
}

Library.prototype.printPlaylists = function(){
  this.playlists.forEach(function(playlist){
    console.log(playlist.name);
  })
}

//Methods acting on Playlist, added to its prototype

Playlist.prototype.addTrack = function(trackObject){
  this.tracks.push(trackObject);
}

Playlist.prototype.getOverallRating = function(){
  let rating = 0;
  let totalRatings = 0;

  this.tracks.forEach(function(track){
    totalRatings+=track.rating;
  });

  rating = totalRatings / this.tracks.length;
  return rating;
}

Playlist.prototype.getTotalDuration = function(){
  let totalDuration = 0;

  this.tracks.forEach(function(track){
    totalDuration+=track.length;
  });
  return totalDuration + " Seconds";
}

//Creating new track objects

let trackCodeMonkey = new Track("Code Monkey","Jonathan Coulton","Thing a Week Three",3,100);
let trackModelViewController = new Track("Model View Controller","James Dempsey","WWDC 2003",5,120);
let trackFourThirtyThree = new Track("Four Thirty-Three","John Cage","Woodstock 1952",4,90);

//Creating new playlist objects
let playlistCodingMusic = new Playlist("codingMusic");
let playlistOther = new Playlist("Other Playlist");

//Assigning tracks object to playlist
playlistCodingMusic.addTrack(trackCodeMonkey);
playlistCodingMusic.addTrack(trackModelViewController);

playlistOther.addTrack(trackFourThirtyThree);

//Creating a new library object
let library = new Library("library","Bob"); 

//Assigning playlist objects to library
library.addPlaylist(playlistCodingMusic);
library.addPlaylist(playlistOther);


//Test driver
console.log("The tracks in the library: ");
library.printTracks();
console.log("The playlists in the library: ");
library.printPlaylists();
console.log("Total duration of playlistCodingMusic: " , playlistCodingMusic.getTotalDuration());