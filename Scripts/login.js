
  let success= document.getElementById("success");
  let main = document.getElementById("main");
  let next= document.getElementById("wrong_credentials")
  let createAcc= document.getElementById("createAcc");
  createAcc.addEventListener("click", ()=>{
    location.replace("/signup.html")
  })

  const loginForm = document.querySelector("#login-form");
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the email and password input values
    const email = document.querySelector("#lemail").value;
    const password = document.querySelector("#lpassword").value;

    // Get the user from local storage
    const users_list = JSON.parse(localStorage.getItem("users")) || [];

    for (let el of users_list) {
      if (email == el.email && password == el.password) {
        main.innerHTML = `<img width="30%"  src=" https://static.vecteezy.com/system/resources/previews/012/000/978/original/3d-rendering-of-cute-icon-illustration-success-payment-approved-png.png" />`
        success.innerHTML=`<h3> please wait </h3>`
        console.log("ok")
        
        setTimeout(() => {
          location.replace("http://google.com");
        }, 2000);
      } else {
       next.innerHTML= `<button id="failed"><h2>Bad Credentials</h2> </button>`
      }
    }
  });

