<?php
require('../dbconnect.php');
header('Content-Type: application/json; charset=UTF-8');

try {
  $stmt_hourDairy = $db->prepare('SELECT date, sum(hour) AS hour FROM post WHERE YEAR(date)=2022 AND MONTH(date)=10 GROUP BY date ORDER BY date');
  $stmt_hourDairy->execute();
  $hour_dairy = $stmt_hourDairy->fetchAll(PDO::FETCH_KEY_PAIR);

  $hour_dairy_set = [];

  foreach ($hour_dairy as $key => $value) {
    $replace = substr($key, 8, 2);
    $hour_dairy_set["day" . $replace] = $value;
    unset($hour_dairy[$key]);
  }

  echo json_encode($hour_dairy_set, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
  echo $e->getMessage();
  exit();
}
