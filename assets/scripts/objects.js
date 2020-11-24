const movieTitle = document.querySelector("#title");
const extraName = document.querySelector("#extra-name");
const extraValue = document.querySelector("#extra-value");
const addMovieBtn = document.querySelector("#add-movie-btn");

const movieList = [];

function renderNewMovie(title, extraInfo) {
  console.log("I am in");
  const newMovieElement = document.createElement("li");

  newMovieElement.innerHTML = `
  
    <div> 
      <h2>${title}</h2>
      <p>${extraInfo}</P>
    </div>
  
  `;
  const listRoot = document.querySelector("#movie-list");
  listRoot.className = "visible";
  listRoot.appendChild(newMovieElement);
}

function addMovieHandler(title, name, value) {
  let newMovie = {};

  if (name && value) {
    newMovie = {
      title: title.value,
      [name.value]: value.value,
    };
  }
  console.log(newMovie);
  movieList.push(newMovie);
  console.log(movieList);
  renderNewMovie(title.value, value.value);
  return;
}

addMovieBtn.addEventListener(
  "click",
  addMovieHandler.bind(null, movieTitle, extraName, extraValue)
);
