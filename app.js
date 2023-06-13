// Initialize Google API client with your client ID
gapi.load('auth2', function() {
	gapi.auth2.init({
		client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com'
	});
});

// Sign in with Google button click event handler
function onSignIn(googleUser) {
	var id_token = googleUser.getAuthResponse().id_token;
	// Send id_token to server for verification and create user account
	// ...
}


document.addEventListener("DOMContentLoaded", function() {
	const loginForm = document.getElementById("login-form");
  
	loginForm.addEventListener("submit", function(event) {
	  event.preventDefault();
	  const username = document.getElementById("username").value;
	  const password = document.getElementById("password").value;
  
	  // Perform login validation
	  if (username === "admin" && password === "password") {
		// Set session storage
		sessionStorage.setItem("isLoggedIn", true);
		sessionStorage.setItem("username", username);
  
		// Redirect to the dashboard page
		window.location.href = "dash2.html";
	  } else {
		alert("Invalid username or password");
	  }
	});
  
	const logoutButton = document.getElementById("logout-button");
  
	logoutButton.addEventListener("click", function() {
	  // Clear session storage
	  sessionStorage.clear();
  
	  // Redirect to the login page
	  window.location.href = "login.html";
	});
  
	checkSession();
  });
  
  function checkSession() {
	const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  
	if (isLoggedIn) {
	  const username = sessionStorage.getItem("username");
	  const welcomeMessage = document.getElementById("welcome-message");
	  const loginContainer = document.getElementById("login-container");
	  const logoutContainer = document.getElementById("logout-container");
  
	  welcomeMessage.textContent = "Welcome, " + username + "!";
	  loginContainer.style.display = "none";
	  logoutContainer.style.display = "block";
	} else {
	  const loginContainer = document.getElementById("login-container");
	  const logoutContainer = document.getElementById("logout-container");
  
	  loginContainer.style.display = "block";
	  logoutContainer.style.display = "none";
	}
  }
  
