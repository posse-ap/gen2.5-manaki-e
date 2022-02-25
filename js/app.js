'use strict'

const options = [
  ["たかなわ", "こうわ", "たかわ"],
  ["かめいど", "かめど", "かめと"],
  ["こうじまち", "おかとまち", "かゆまち"],
  ["おなりもん", "ごせいもん", "おかどもん"],
  ["とどろき", "たたら", "たたりき"],
  ["しゃくじい", "いじい", "せきこうい"],
  ["ぞうしき", "ざっしき", "ざっしょく"],
  ["おかちまち", "みとちょう", "ごしろちょう"],
  ["ししぼね", "しこね", "ろっこつ"],
  ["こぐれ", "こばく", "こしゃく"],
]

let answers = new Array();
options.forEach(element => {
  answers.push(element[0])
});

function shuffleArray(inputArray) {
  inputArray.sort(() => Math.random() - 0.5);
}

let answerNumber = null;

for (let i = 0; i < answers.length; i++) {
  shuffleArray(options[i]);

  let html =
    '<div class="inner">' +
      `<h1 class="question">${i + 1}. この地名はなんて読む？</h1>` +
      '<div class="img">' +
        `<img src="./img/${i + 1}.png" alt="">` +
      '</div>' +
      '<ol class="optionBox">';
      
  answerNumber = options[i].indexOf(answers[i]);
  for (let j = 0; j < options[i].length; j++) {
    html += 
        `<li class="option" id="${i}_${j}" onclick="check('${i}', '${j}')" data-answer-number = "${answerNumber}">` + 
          options[i][j] + 
        "</li>";
  };

  html +=
      '</ol>' +
      '<div class="answerBox correct">' +
        '<p class="correctResult">正解！</p>' +
        `<p class="answerSentence">正解は「${answers[i]}」です！</p>` +
      '</div>' +
      '<div class="answerBox wrong">' +
        '<p class="wrongResult">不正解！</p>' +
        `<p class="answerSentence">正解は「${answers[i]}」です！</p>` +
      '</div>' +
    '</div>';
  document.getElementById("main").insertAdjacentHTML('beforeend', html);
}

function check(options, selected) {
  let answerNumber= document.getElementById(options + "_" + selected).dataset.answerNumber;
  document.getElementById(options + "_" + answerNumber).classList.add('true'); //正解の選択肢を青くする
  document.getElementsByClassName('optionBox')[options].classList.add('clickedOptionBox'); // 二度クリックさせない

  if (answerNumber == selected) { //クリックされた選択肢と正解が一致
    document.getElementsByClassName("answerBox")[2 * options].classList.remove("correct"); //正解回答ボックスの表示
  } else { //クリックされた選択肢と正解が不一致
    document.getElementById(options + "_" + selected).classList.add("false"); //クリックした選択肢を赤くする
    document.getElementsByClassName("answerBox")[2 * options + 1].classList.remove("wrong"); //不正解回答ボックスの表示
  }
}