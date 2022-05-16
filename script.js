



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
  let clearBtn = document.getElementById('clear');
  if(clearBtn){
    clearBtn.classList.add('highlight')
  }else{

  let clear = document.createElement('div');
  clear.classList.add('tag','highlight');
  clear.id = 'clear';
  clear.innerText = 'Clear x';
  clear.addEventListener('click', () => {
    selectedGenre = [];
    setGenre();
    getMovies(API_URL);
  })
  tagsEl.append(clear);
  }
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

  
    var favButton = document.createElement('button');
        favButton.setAttribute('class', 'fav-btn');
        favButton.setAttribute ('id', API_URL);
        favButton.onclick = function() {
        var id = getId(this); {
            addToFavorites(id);
}

    main.appendChild(favButton);

    favButton.textContent = "Favorite"

    }
  
  });
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
      <button id="fav-btn">Favorite</button>
    </div>
    `
    
    
    


    main.appendChild(movieEl);

  })
}

function addToFavorites (id) {
  var favsArray = [];
  favsArray = JSON.parse(localStorage.getItem("favorites"));
  if (favsArray == null) {
      favsArray = [id];
      localStorage.setItem("favorites", JSON.stringify(favsArray));
  } else {
    if (favsArray.includes(id)) {
      M.toast({html: "This movie is currently in your favorites."})
    } else {
      favsArray.push(id);
      localStorage.setItem("favorites", JSON.stringify(favsArray));
      M.toast({html: "Added to favorites!"})
    }
  }
}

function getId(btn) {
  return btn.id;
}



form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;
  selectedGenre=[];
  setGenre();


  if(searchTerm) {
    getMovies(searchURL+ '&query='+searchTerm)
   }
   else{
    getMovies(API_URL);
  }
})











