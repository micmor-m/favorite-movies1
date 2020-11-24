const addMovieBtn = document.querySelector("#add-movie-btn");
const searchBtn = document.querySelector("#search-btn");
const listRoot = document.querySelector("#movie-list");

const movieList = [];

function renderNewMovie(title, extraInfo) {
  const newMovieElement = document.createElement("li");

  newMovieElement.innerHTML = `
  <div> 
  <h2>${title}</h2>
  <p>${extraInfo}</P>
  <hr>
  </div>
  
  `;

  if (listRoot.length === 0) {
    listRoot.classList.remove("visible");
    return;
  } else {
    listRoot.classList.add("visible");
  }
  listRoot.appendChild(newMovieElement);
}

function addMovieHandler() {
  const title = document.querySelector("#title").value;
  const extraName = document.querySelector("#extra-name").value;
  const extraValue = document.querySelector("#extra-value").value;

  //input validation
  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    //not ideal but for now use random number as ID
    id: Math.random(),
  };

  movieList.push(newMovie);

  renderNewMovie(title, extraValue);
  return;
}

function updateMovieList(filteredList) {
  listRoot.remove();
  const filteredListRoot = document.createElement("ul");
  filteredListRoot.className = "card";
  filteredListRoot.id = "movie-list";
  //const lastSection = document.body.children;
  const body = document.body;
  //console.log(lastSection);
  //lastSection[1].append(filteredListRoot);
  body.append(filteredListRoot);

  for (const filterMovie of filteredList) {
    const title = filterMovie.info.title;
    let extraInfo = "";
    for (const key in filterMovie.info) {
      if (key !== "title") {
        extraInfo = filterMovie.info[key];
      }
    }
    const newMovieElement = document.createElement("li");
    newMovieElement.innerHTML = `
    <div> 
    <h2>${title}</h2>
    <p>${extraInfo}</P>
    <hr>
    </div>
    
    `;
    filteredListRoot.appendChild(newMovieElement);
  }

  if (filteredList.length === 0) {
    filteredListRoot.classList.remove("visible");
    return;
  } else {
    filteredListRoot.classList.add("visible");
  }
}

function searchHandler() {
  const filteredTitle = document.querySelector("#filter-title").value;

  const filteredList = movieList.filter((obj) => {
    return obj.info.title.includes(filteredTitle);
  });

  console.log(filteredList);
  // listRoot.replaceChild(filteredTitle);
  updateMovieList(filteredList);
  return;
}

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchHandler);
