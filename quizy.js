'use strict'

const answers = ["たかなわ", "かめいど", "こうじまち", "おなりもん", "とどろき", "しゃくじい", "ぞうしき", "おかちまち", "ししぼね", "こぐれ"] //各設問の正解

const option = [ //各設問の正解を含む選択肢
  [answers[0], "こうわ", "たかわ"],
  [answers[1], "かめど", "かめと"],
  [answers[2], "おかとまち", "かゆまち"],
  [answers[3], "ごせいもん", "おかどもん"],
  [answers[4], "たたら", "たたりき"],
  [answers[5], "いじい", "せきこうい"],
  [answers[6], "ざっしき", "ざっしょく"],
  [answers[7], "みとちょう", "ごしろちょう"],
  [answers[8], "しこね", "ろっこつ"],
  [answers[9], "こばく", "こしゃく"],
]

function shuffleArray(inputArray) { //選択肢をランダムに表示
  inputArray.sort(() => Math.random() - 0.5);
}

for (let i = 0; i < answers.length; i++) { //表示させたいHTMLの繰り返し
  shuffleArray(option[i]);

  document.body.insertAdjacentHTML('beforeend', '<div class="main"></div>'); //設問を囲むdivの表示
  const main = document.getElementsByClassName("main")[i];
  var html = `<h1 class="question">${i + 1}. この地名はなんて読む？</h1>` //問題文の表示
  html += `<div class="picture"><img src="picture/question${i}.png" alt=""></div>`; //写真の表示
  html += '<div class="optionBox"></div>'; //選択肢を囲むdivの表示
  main.insertAdjacentHTML('beforeend', html);
  
  for (let j = 0; j < option[i].length; j++) { //選択肢の表示
    const optionBox = document.getElementsByClassName("optionBox")[i];
    optionBox.insertAdjacentHTML('beforeend', `<h3 class="option" id="${i}_${j}" onclick="addClass('${i}', '${j}')">` + option[i][j] + "</h3>")
  };

  main.insertAdjacentHTML('beforeend', '<div class="answerBox correct"></div>'); //正解回答ボックスの準備
  const correct = document.getElementsByClassName('correct')[i];
  correct.insertAdjacentHTML('beforeend', '<p class="correctResult">正解！</p>');
  correct.insertAdjacentHTML('beforeend', `<p class="answerSentence">正解は「${answers[i]}」です！</p>`);

  main.insertAdjacentHTML('beforeend', '<div class="answerBox wrong"></div>'); //不正解回答ボックスの準備
  const wrong = document.getElementsByClassName('wrong')[i];
  wrong.insertAdjacentHTML('beforeend', '<p class="wrongResult">不正解！</p>');
  wrong.insertAdjacentHTML('beforeend', `<p class="answerSentence">正解は「${answers[i]}」です！</p>`);
}

function addClass(options, selected) { //選択肢がクリックされたときの挙動

  let select = option[options].indexOf(answers[options]);
  document.getElementById(options + "_" + select).classList.add('true'); //正解の選択肢を赤くする
  document.getElementsByClassName('optionBox')[options].classList.add('clickedOptionBox'); // 二度クリックさせない

  if (option[options][selected] === answers[options]) { //クリックされた選択肢と正解が一致していた時
    document.getElementsByClassName("answerBox")[2 * options].classList.remove("correct"); //正解回答ボックスの表示
  } else {
    document.getElementById(options + "_" + selected).classList.add("false"); //クリックした選択肢を青くする
    document.getElementsByClassName("answerBox")[2 * options + 1].classList.remove("wrong"); //不正解回答ボックスの表示
  }
}