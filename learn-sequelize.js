const { Genre, Movie, Actor } = require("./models");

/*
  Write a function that creates a new Genre in the database
  - currently, the genre table has 3 entries: Action, Comedy, and Drama
  - add one more Genre of your choice
  - duplicate entries are not allowed (try it to learn about errors)
*/
async function insertNewGenre() {
  // Add code here
  const newGenre = await Genre.create({ Genre: "Fiction" });
  console.log(newGenre);
}

/*
  Write a function that creates a new Movie in the database
  - currently, there are 5 movies
  - add one more Movie of your choice.
  - the movie CANNOT be from year 2008 (try it to learn about errors)
*/
async function insertNewMovie() {
  // Add code here
  const newMovie = await Movie.create({ Movie: "The Last Potato" });
  console.log(newMovie);
}

/*
  Write a function that returns the title of the movie with ID=2
*/
async function getMovieWithId2() {
  // Add code here
  const foundTitle = await Movie.findAll({
    where: {
      ID: 2,
    },
  });
  return foundTitle;
}

/*
  Write a function that returns an array of all the actor names
*/
async function getAllActors() {
  // Add code here
  const actors = await Actor.findAll();
  return actors.map(actor => actor.name);
}

/*
  Write a function that returns an array of all the movie titles from 2008
*/
async function getAllMoviesFrom2008() {
  // Add code here
  const 
}

/*
  Write a function that deletes the genre you added in the first function: insertNewGenre()
*/
function deleteGenreYouAdded() {
  // Add code here
}

/*
  Write a function that associates:
  - the actor "Rosario Dawson" with the movie "Eagle Eye"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
function associateRosarioToEagleEye() {
  // Add code here
}

/*
  Write a function that associates:
  - the actor "Robert Downey Jr." with the movie "Tropic Thunder"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
async function associateRobertToTropicThunder() {
  // Add code here
}

module.exports = {
  insertNewGenre,
  insertNewMovie,
  getMovieWithId2,
  getAllActors,
  getAllMoviesFrom2008,
  deleteGenreYouAdded,
  associateRosarioToEagleEye,
  associateRobertToTropicThunder,
};
