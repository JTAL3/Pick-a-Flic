// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("apitestbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function(e) {
    e.preventDefault();
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

 var searchButton = document.getElementById("my-login");

 searchButton.onclick = function(){
    getData()
    
   };

async function getData() {
  var raw = JSON.stringify({
    "data": {
      "y": 2017
    }
  });
  const response = await fetch(url, {
    method: 'POST',
    body: raw
  });
  const data = await response.json();
  console.log(data.data);

};

//api key 39fdf732

// async function getData() {
//     var locationInput = document.getElementById("modalLocation");
//  var zipcode = locationInput.value.trim();
  
//     var raw = JSON.stringify({
//           "data": {
//             "filterRadius": {
//               "miles": 50,
//               "postalcode": zipcode
//             }
//         }});
//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/vnd.api+json',
//            'Authorization': 'u2301vV9'
//         },
//        body: raw
//    });
//    const data = await response.json();

