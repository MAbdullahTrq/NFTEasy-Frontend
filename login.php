<?php
// Establish the database connection
$conn = mysqli_connect("localhost", "admin", "password", "NFTEasy");

// Check for connection errors
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get the form data
$email = $_POST['email'];
$password = $_POST['password'];

// Prepare the SQL query
$sql = "SELECT * FROM login_data WHERE email = '$email'";
$result = mysqli_query($conn, $sql);

// Check if the user exists
if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    
    // Verify the hashed password
    $storedPassword = $row['password'];
    $salt = $row['salt'];
    $hashedPassword = hash('sha256', $password . $salt);

    if ($storedPassword === $hashedPassword) {
        // Login successful
        header("Location: dash2.html");
        exit();
    }
}

// Login failed
echo "Invalid email or password.";

// Close the database connection
mysqli_close($conn);
?>
