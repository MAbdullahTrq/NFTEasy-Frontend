<?php
// PHP code
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Database credentials
$host = 'localhost';
$username = 'admin';
$password = 'password';
$dbName = 'nfteasy';
$tableName = 'nft_data';

// Create a connection to the database
$conn = new mysqli($host, $username, $password, $dbName);

// Check if the connection is successful
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// SQL query to fetch NFT data
$sql = "SELECT * FROM $tableName";
$result = $conn->query($sql);

// Array to store the NFT data
$nftData = array();

// Fetch data from the result set
while ($row = $result->fetch_assoc()) {
  $nftData[] = $row;
}

// Convert the array to JSON and output the result
echo json_encode($nftData);

// Close the database connection
$conn->close();
?>
