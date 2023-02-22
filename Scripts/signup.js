const signupForm = document.querySelector('#signup-form');
const users_list = JSON.parse(localStorage.getItem("users"))||[];
let loginn= document.getElementById("createAcc");
loginn.addEventListener("click", ()=>{
    location.replace("")
    
})

signupForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get the name, email, password, and confirm password input values
  const name = document.querySelector('#sname').value;
  const email = document.querySelector('#semail').value;
  const password = document.querySelector('#spassword').value;
  const confirmPassword = document.querySelector('#sconfirm-password').value;
  
  // If the password and confirm password do not match, show an error
  if (password !== confirmPassword) {
    alert('Passwords do not match. Please try again.');
    return;
  }
  
  // Create a new user object and add it to local storage
  const signupDeatails = { name, email, password };
  users_list.push(signupDeatails);
  localStorage.setItem("users", JSON.stringify(users_list));
  
  alert('Your account has been created! Please log in.');
  location.replace("./login.html")
  // Add code to redirect to the login page here
});
