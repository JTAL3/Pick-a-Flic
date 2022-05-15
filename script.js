// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("pickbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  var str = "clicked";
  console.log(str);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// var searchButton = document.getElementById("searchbtn");

// searchButton.onclick = function getMovies(){
// };



const API_KEY = 'api_key=eaeb064cc2b9ae77a9081f858014205c';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'
+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;

const genres = [
  {
  "id": 28,
  "name": "Action"
  },
  {
  "id": 12,
  "name": "Adventure"
  },
  {
  "id": 16,
  "name": "Animation"
  },
  {
  "id": 35,
  "name": "Comedy"
  },
  {
  "id": 80,
  "name": "Crime"
  },
  {
  "id": 99,
  "name": "Documentary"
  },
  {
  "id": 18,
  "name": "Drama"
  },
  {
  "id": 10751,
  "name": "Family"
  },
  {
  "id": 14,
  "name": "Fantasy"
  },
  {
  "id": 36,
  "name": "History"
  },
  {
  "id": 27,
  "name": "Horror"
  },
  {
  "id": 10402,
  "name": "Music"
  },
  {
  "id": 9648,
  "name": "Mystery"
  },
  {
  "id": 10749,
  "name": "Romance"
  },
  {
  "id": 878,
  "name": "Science Fiction"
  },
  {
  "id": 10770,
  "name": "TV Movie"
  },
  {
  "id": 53,
  "name": "Thriller"
  },
  {
  "id": 10752,
  "name": "War"
  },
  {
  "id": 37,
  "name": "Western"
  }
  
]

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const tagsEl = document.getElementById('tags');

var selectedGenre = []
setGenre();
function setGenre() {
  tagsEl.innerHTML= '';
  genres.forEach(genre => {
    const t = document.createElement('div');
    t.classList.add('tag');
    t.id=genre.id;
    t.innerText = genre.name;
    t.addEventListener('click', () => {
      if(selectedGenre.length == 0){
        selectedGenre.push(genre.id);
      }else{
        if(selectedGenre.includes(genre.id)){
          selectedGenre.forEach((id, idx) => {
            if(id == genre.id){
              selectedGenre.splice(idx, 1);
            }
          })
        }else{
          selectedGenre.push(genre.id);
        }
      }
      console.log(selectedGenre)
      getMovies(API_URL + '&with_genres='+encodeURI(selectedGenre.join(',')))
      highlightSelection()
    })
    tagsEl.append(t);
  })

}

function highlightSelection(){
  const tags = document.querySelectorAll('.tag');
  tags.forEach(tag => {
    tag.classList.remove('highlight')
  })
  clearBtn()
  if(selectedGenre.length !=0){
    selectedGenre.forEach(id => {
      const highlightedTag = document.getElementById(id);
      highlightedTag.classList.add('highlight');

  })
  }
  
}

function clearBtn(){
  let clear = document.createElement('div');
  clear.classList.add('tag','highlight');
  clear.innerText = 'Clear x';
  tagsEl.append(clear);
}

getMovies(API_URL);

function getMovies(url) {
  fetch(url).then(res => res.json()).then(data => {

    console.log(data.results)
    if(data.results.length !== 0){
      showMovies(data.results);
    }else{
      main.innerHTML= `<h1 class="no-results">No Results Found</h1>`
    }
     
  })
}

function showMovies(data) {
  main.innerHTML = '';

  data.forEach(movie => {
    const {title, poster_path, overview} = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
    <img src="${IMG_URL+poster_path}" alt="${title}">
    <div class="movie-info">
      <h3>${title}</h3>
    </div>
    <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>
    `

    main.appendChild(movieEl);
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if(searchTerm) {
    getMovies(searchURL+ '&query='+searchTerm)
   }
   else{
    getMovies(API_URL);
  }
})






// const url = "http://www.omdbapi.com/?apikey=39fdf732&"

// var searchButton = document.getElementById("searchbtn");

//  searchButton.onclick = function(){
//     getData()
//  };

// async function getData() {
//     var title = $("#title").val();
//     var year = $("#year").val(); 
//     var queryString = "http://www.omdbapi.com/?apikey=39fdf732&t=" + title + "&y=" + year + "&plot=short&r=json";

// }

