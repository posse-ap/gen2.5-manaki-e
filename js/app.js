'use strict'

const option = [ //各設問の正解を含む選択肢
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
option.forEach(element => {
  answers.push(element[0])
});

console.log("answers", answers);

function shuffleArray(inputArray) { //選択肢をランダムに表示
  inputArray.sort(() => Math.random() - 0.5);
}

let answerNumber = null;

for (let i = 0; i < answers.length; i++) { //表示させたいHTMLの繰り返し
  shuffleArray(option[i]);

  let html =
    '<div class="inner">' + //設問を囲むdivの表示
      `<h1 class="question">${i + 1}. この地名はなんて読む？</h1>` + //問題文の表示
      '<div class="picture">' +
        `<img src="./img/${i + 1}.png" alt="">` + //写真の表示
      '</div>' +
      '<ul class="optionBox">'; //選択肢を囲むdivの表示
  answerNumber = option[i].indexOf(answers[i]);
  console.log("answer", answerNumber);
  for (let j = 0; j < option[i].length; j++) { //選択肢の表示
    html += 
        `<li class="option" id="${i}_${j}" onclick="selectProcess('${i}', '${j}')" data-answer-number = "${answerNumber}">` + 
          option[i][j] + 
        "</li>";
  };

  html +=
      '</ul>' +
      '<div class="answerBox correct">' + //正解回答ボックスの準備
        '<p class="correctResult">正解！</p>' +
        `<p class="answerSentence">正解は「${answers[i]}」です！</p>` +
      '</div>' +
      '<div class="answerBox wrong">' + //不正解回答ボックスの準備
        '<p class="wrongResult">不正解！</p>' +
        `<p class="answerSentence">正解は「${answers[i]}」です！</p>` +
      '</div>' +
    '</div>';
  document.getElementById("main").insertAdjacentHTML('beforeend', html);
}

function selectProcess(options, selected) { //選択肢がクリックされたときの挙動

 //データ属性からanswerNumberを取得

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