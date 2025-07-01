<?php
$conn = mysqli_connect('localhost', 'root', '', 'investwise');
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
?>