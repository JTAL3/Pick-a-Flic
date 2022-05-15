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








const url = "http://www.omdbapi.com/?apikey=39fdf732&"

var searchButton = document.getElementById("searchbtn");

 searchButton.onclick = function(){
    getData()
 };

async function getData() {
    var title = $("#title").val();
    var year = $("#year").val(); 
    var queryString = "http://www.omdbapi.com/?apikey=39fdf732&t=" + title + "&y=" + year + "&plot=short&r=json";

}


//When the user clicks on favorite it is passed to add to favorites function
favbutton.onclick = function () {
  var id = getId(this);
  addtofavorites(id);
}

card.appendChild(imageBox);
imageBox.appendChild(image);
card.appendChild(cardConent);
card.appendChild(cardAction);
cardContent.appendChild(cardTitle);
cardContent.appendChild(cardText);
cardAction.appendChild(infoButton);
cardAction.appendChild(favbutton);
resultsE1.appendChild(card);

infoButton.textConent = "More"
favbutton.textConent = "Favorites"
cardTitle.textConent = movies[i].title;

