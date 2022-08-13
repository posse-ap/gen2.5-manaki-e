<?php
require("./dbconect.php");

$id = (int)$_GET['id'];

$stmt__big_questions = $db->query("SELECT * from big_questions WHERE id={$id}");
$big_questions = $stmt__big_questions->fetchAll();

$stmt__questions = $db->query("SELECT * from questions WHERE big_question_id={$id}");
$questions = $stmt__questions->fetchAll();

$choices = array();
for ($i = 0; $i < count($questions); $i++) {
  $stmt__choices = $db->query("SELECT * from choices WHERE question_id={$questions[$i]['id']}");
  $choices[] = $stmt__choices->fetchAll();
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
    <?php
    echo $big_questions[0]["name"];
    ?>
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
            <?php
            echo $i + 1 . ".この地名は何て読む？";
            ?>
          </div>
          <div class="picture">
            <img src="<?php echo "./img/" . $questions[$i]['image'] ?>" alt="">
          </div>
          <div class="optionBox">
            <?php
            shuffle($choices[$i]);
            for ($j = 0; $j < count($choices[$i]); $j++) {
            ?>
              <button class="option" id="" onclick="selectProcess()">
                <?php
                echo $choices[$i][$j]["name"];
                ?>
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