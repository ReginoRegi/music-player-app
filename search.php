<?php
include 'db.php';

$term = isset($_GET['term']) ? $conn->real_escape_string($_GET['term']) : '';

$sql = "SELECT * FROM songs WHERE title LIKE '%$term%' OR artist LIKE '%$term%'";
$result = $conn->query($sql);

$songs = [];
while ($row = $result->fetch_assoc()) {
  $songs[] = $row;
}
header('Content-Type: application/json');
echo json_encode($songs);
?>
