<?php
require('../dbconnect.php');
header('Content-Type: application/json; charset=UTF-8');

try {
  $stmt_hourLanguage = $db->prepare('SELECT languages.language, sum(hour) AS hour FROM post LEFT JOIN languages ON post.language_id = languages.id GROUP BY language_id ORDER BY language_id');
  $stmt_hourLanguage->execute();
  $hour_language = $stmt_hourLanguage->fetchAll(PDO::FETCH_KEY_PAIR);

  $hour_language_set = [];

  foreach ($hour_language as $key => $value) {
    $hour_language_set[$key] = $value;
    unset($hour_language[$key]);
  }

  echo json_encode($hour_language_set, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
  echo $e->getMessage();
  exit();
}
