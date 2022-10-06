<?php
require('../dbconnect.php');
header('Content-Type: application/json; charset=UTF-8');

try {
  $stmt_hourContent = $db->prepare('SELECT contents.content, sum(hour) AS hour FROM post LEFT JOIN contents ON post.content_id = contents.id GROUP BY content_id ORDER BY content_id');
  $stmt_hourContent->execute();
  $hour_content = $stmt_hourContent->fetchAll(PDO::FETCH_KEY_PAIR);

  $hour_content_set = [];

  foreach ($hour_content as $key => $value) {
    $hour_content_set[$key] = $value;
    unset($hour_content[$key]);
  }

  echo json_encode($hour_content_set, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
  echo $e->getMessage();
  exit();
}
