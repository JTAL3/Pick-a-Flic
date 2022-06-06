//(PLACEHOLDER) function to gather form data and call our "POST /api/user/login" express route
const loginFormHandler = async function (event) {
  event.preventDefault();
const username = document.getElementById("username").value
const password = document.getElementById("password").value
console.log(username, password)
if (username && password) {
  fetch("http://localhost:3001/api/user/login", { 
    method: "POST",
    mode: "cors",
    cache: "no-cahce",
    credentials: "same-origin",
    body: JSON.stringify({
      username, password
    }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": '*'
    },
   // "Access-Control-Allow-Origin": *
  })
  .then (response => {
    response.json()
    .then(data =>{
      console.log(data);
    })
  })
 // if (res.ok){
    //document.location.replace("")
  //  console.log(res)
 // }
}

};
var loginBtn = document.getElementById("loginBtn")
loginBtn.addEventListener("click", loginFormHandler)
