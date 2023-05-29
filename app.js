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



