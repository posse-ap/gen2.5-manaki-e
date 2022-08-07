<?php

require("./dbconect.php");

// SQL文の実行準備
$stmt = $db->query(" SELECT * from big_questions");

$big_questions = $stmt->fetchAll();

// 変数の値をバインド
// $stmt->bindValue();

// SQL実行
// $stmt->execute();

var_dump($big_questions[0]["name"]);
print_r($big_questions);
?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/quizy.css">
  <title>quizy</title>
</head>

<body>
  <main>
    <h1>
      <?php
      $id = $_GET['id'];
      if ($id = 1) {
        # code..
      }
      ?>
    </h1>
    <ol id="wrapper"></ol>
  </main>
  <script src="./js/quizy.js"></script>
</body>

</html>