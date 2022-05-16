
var favoritesContainer = document.getElementById("favorites-container");

var favorites = JSON.parse(localStorage.getItem("favorites"));

var favTitles = [];

for (var i = 0; i <favorites.length; i++) {
    const API_KEY = 'api_key=eaeb064cc2b9ae77a9081f858014205c';
    const BASE_URL = 'https://api.themoviedb.org/3' + favorites[i] + "?api_key=" + apiKey + "&language=en-US";
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        createItem(data.title);
    });
}

function createItem(title) {
    var newItem = document.createElement("li");
    newItem.setAttribute("class", "savedfavs");
    console.log(title);
    newItem.textContent = title;
    favoritesContainer.appendChild(newItem);
}