<?php
require("./dbconect.php");

$id = (int)$_GET['id'];

$stmt__big_questions = $db->prepare("SELECT * from big_questions WHERE id = ?");
$stmt__big_questions -> bindValue(1,$id);
$stmt__big_questions->execute();
$big_questions = $stmt__big_questions->fetchAll(PDO::FETCH_ASSOC);

$stmt__questions = $db->prepare("SELECT * from questions WHERE big_question_id = ?");
$stmt__questions -> bindValue(1,$id);
$stmt__questions->execute();
$questions = $stmt__questions->fetchALL(PDO::FETCH_ASSOC);

$choices = array();
for ($i = 0; $i < count($questions); $i++) {
  $stmt__choices = $db->prepare("SELECT * from choices WHERE question_id = ?");
  $stmt__choices -> bindValue(1, $questions[$i]["id"]);
  $stmt__choices->execute();
  $choices[] = $stmt__choices->fetchAll(PDO::FETCH_ASSOC);
}
?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/quizy.css">
  <title>
    <?= $big_questions[0]["name"]; ?>
  </title>
</head>

<body>
  <main>
    <ol class="questions">
      <?php
      for ($i = 0; $i < count($questions); $i++) {
      ?>
        <li class="question">
          <div class="title">
            <?= $i + 1 . ".この地名は何て読む？"; ?>
          </div>
          <div class="picture">
            <img src="<?= "./img/" . $questions[$i]['image'] ?>" alt="">
          </div>
          <div class="optionBox">
            <?php
            shuffle($choices[$i]);
            for ($j = 0; $j < count($choices[$i]); $j++) {
            ?>
              <button class="option" id="" onclick="selectProcess()">
                <?= $choices[$i][$j]["name"]; ?>
              </button>
            <?php
            }
            ?>
          </div>
          <div class="answerBox correctBox">
            <p class="correctResult">正解！</p>
            <p class="answerSentence">正解は「」です！</p>
          </div>
          <div class="answerBox wrongBox">
            <p class="wrongResult">不正解！</p>
            <p class="answerSentence">正解は「」です！</p>
          </div>
        </li>
      <?php
      }
      ?>
    </ol>
  </main>
  <!-- <script src="./js/quizy.js"></script> -->
</body>

</html>