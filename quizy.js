'use strict'

const answers = ["たかなわ", "かめいど", "こうじまち", "おなりもん", "とどろき", "しゃくじい", "ぞうしき", "おかちまち", "ししぼね", "こぐれ"] //各設問の正解

const options = [ //各設問の正解を含む選択肢
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
  shuffleArray(options[i]);

  let html =
    '<div class="main">' + //設問を囲むdivの表示
      `<h1 class="question">${i + 1}. この地名はなんて読む？</h1>` + //問題文の表示
      `<div class="picture"><img src="picture/question${i}.png" alt=""></div>` + //写真の表示
      '<div class="optionBox">'; //選択肢を囲むdivの表示

  for (let j = 0; j < options[i].length; j++) { //選択肢の表示
    html += `<p class="options" id="${i}_${j}" onclick="selectProcess('${i}', '${j}')">` + options[i][j] + "</p>"
  };

  html +=
      '</div>' +
      '<div class="answerBox correctBox">' + //正解回答ボックスの準備
        '<p class="correctResult">正解！</p>' +
        `<p class="answerSentence">正解は「${answers[i]}」です！</p>` +
      '</div>' +
      '<div class="answerBox wrongBox">' + //不正解回答ボックスの準備
        '<p class="wrongResult">不正解！</p>' +
        `<p class="answerSentence">正解は「${answers[i]}」です！</p>` +
      '</div>' +
    '</div>';

  document.currentScript.insertAdjacentHTML('beforebegin', html);
}

function selectProcess(optionNumber, selectNumber) { //選択肢がクリックされたときの挙動

  let answerNumber= findAnswerNumber(optionNumber);
  document.getElementById(optionNumber + "_" + answerNumber).classList.add('true'); //正解の選択肢を青くする
  document.getElementsByClassName('optionBox')[optionNumber].classList.add('clickedOptionBox'); // 二度クリックさせない

  if (judge(optionNumber, selectNumber)) { //クリックされた選択肢と正解が一致
    document.getElementsByClassName("answerBox")[2 * optionNumber].classList.remove("correctBox"); //正解回答ボックスの表示
  } else { //クリックされた選択肢と正解が不一致
    document.getElementById(optionNumber + "_" + selectNumber).classList.add("false"); //クリックした選択肢を赤くする
    document.getElementsByClassName("answerBox")[2 * optionNumber + 1].classList.remove("wrongBox"); //不正解回答ボックスの表示
  }
}

/* ################################
関数の勉強として切り出しました
###################################*/

function findAnswerNumber(optionNumber) {
  return options[optionNumber].indexOf(answers[optionNumber])
}

function judge(optionNumber, selectNumber) {
  return options[optionNumber][selectNumber] === answers[optionNumber]
}