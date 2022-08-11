<?php
session_start();

$dsn = 'mysql:host=db;dbname=quizy;charset=utf8;';
$user = 'root';
$password = 'secret';

try {
  $db = new PDO($dsn, $user, $password);
  $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  echo '接続失敗: ' . $e->getMessage();
  exit();
}
