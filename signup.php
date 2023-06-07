<?php
// Establish the database connection
$conn = mysqli_connect("localhost", "admin", "password", "NFTEasy");

// Check for connection errors
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

// Generate a random salt
$salt = bin2hex(random_bytes(16));

// Hash the password with the salt
$hashedPassword = hash('sha256', $password . $salt);

// Prepare the SQL query
$sql = "INSERT INTO login_data (name, email, password, salt) VALUES ('$name', '$email', '$hashedPassword', '$salt')";
if (mysqli_query($conn, $sql)) {
    // Signup successful
    header("Location: dash2.html");
    exit();
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Close the database connection
mysqli_close($conn);
?>
