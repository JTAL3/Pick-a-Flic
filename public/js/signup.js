//(PLACEHOLDER) function to gather form data and call our "POST /api/user" express route
const signupFormHandler = async function (event) {
  event.preventDefault();
const username = document.getElementById("").value;
const password = document.getElementById("").value;
if(username && password) {
  const response = await fetch("/api/user/signup", { 
    method: "POST",
    body: json.stringify({
      username, password
    }),
    headers : { "Content-Type": "application/json"}
  }) 
  if (response.ok){
    document.location.replace("/home")
  }
}
};

document.getElementById("").addEventListener("submit", signupFormHandler)