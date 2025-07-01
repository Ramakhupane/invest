<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $email = $_POST['email'];
  $password = $_POST['password'];
  $query = "INSERT INTO users (email, password) VALUES ('$email', '$password')";
  if (mysqli_query($conn, $query)) {
    echo "Registration successful";
  } else {
    echo "Error: " . mysqli_error($conn);
  }
}
?>