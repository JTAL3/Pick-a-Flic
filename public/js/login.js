//(PLACEHOLDER) function to gather form data and call our "POST /api/user/login" express route
const loginFormHandler = async function (event) {
  event.preventDefault();
  const username = document.getElementById("").value;
  const password = document.getElementById("password").value;
 const response = await fetch("api/users/login", { 
    method: "POST",
    body: json.stringify({
      username, password
    }),
    header:{"Content-Type":"application/json"}
  })
  if(response.ok){document.location.replace("/home")}
};

document.getElementById("").addEventListener("submit", loginFormHandler)