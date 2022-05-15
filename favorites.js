const { response } = require("express");

var favoritesContainer = document.getElementById("favorites-container");

var favorites = JSON.parse(localStorage.getItem("favorites"));

var favTitles = [];

for (var i = 0; i <favorites.length; i++) {
    var apikey = '';
    var url = "" + favorites[i] + "?api_key=" + apiKey + "&language=en-US";
    fetch(url)
    .then(function (response) {
        return response.json();
    });
}

function createItem(title) {
    var newItem = document.createElement("li");
    newItem.setAttribute("class", "collection-item");
    console.log(title);
    newItem.textContent = title;
    favoritesContainer.appendChild(newItem);
}