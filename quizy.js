'use strict'

/*
  data属性でvalid
*/

const answers = ["たかなわ", "かめいど", "こうじまち"]
const option = [
  [answers[0], "こうわ", "たかわ"],
  [answers[1], "かめど", "かめと"],
  [answers[2], "おかとまち", "かゆまち"]
]

function shuffleArray(inputArray){
  inputArray.sort(()=> Math.random() - 0.5);
}

for (let i = 0; i < answers.length; i++) {
  shuffleArray(option[i]);

  document.body.insertAdjacentHTML('beforeend', '<div class="main"></div>');
  const main = document.getElementsByClassName("main")[i];
  main.insertAdjacentHTML('beforeend', `<h1 class="question">${i + 1}. この地名はなんて読む？</h1>`);
  main.insertAdjacentHTML('beforeend', `<div class="picture"><img src="picture/question${i}.png" alt=""></div>`);
  main.insertAdjacentHTML('beforeend', '<div class="option-box"></div>');
  const optionBox = document.getElementsByClassName("option-box")[i];

  for (let j = 0; j < 3; j++) {
    optionBox.insertAdjacentHTML('beforeend', `<h3 class="option" id="${i}_${j}" onclick="addClass('${i}', '${j}')">` + option[i][j] + "</h3>")
  };

  main.insertAdjacentHTML('beforeend', '<div class="answerBox correct"></div>');
  const correct = document.getElementsByClassName('correct')[i];
  correct.insertAdjacentHTML('beforeend', '<p class="correctResult">正解！</p>');
  correct.insertAdjacentHTML('beforeend', `<p class="answerSentence">正解は「${answers[i]}」です！</p>`);
  main.insertAdjacentHTML('beforeend', '<div class="answerBox wrong"></div>');
  const wrong = document.getElementsByClassName('wrong')[i];
  wrong.insertAdjacentHTML('beforeend', '<p class="wrongResult">不正解！</p>');
  wrong.insertAdjacentHTML('beforeend', `<p class="answerSentence">正解は「${answers[i]}」です！</p>`);
}

function addClass(options, selected) {
  let select = option[options].indexOf(answers[options]);
  document.getElementById(options + "_" + select).classList.add('true');
  document.getElementsByClassName('option-box')[options].classList.add('clicked-option-box');
  if (option[options][selected] === answers[options]) {
    document.getElementsByClassName("answerBox")[2 * options].classList.remove("correct");
  } else {
    document.getElementById(options + "_" + selected).classList.add("false");
    document.getElementsByClassName("answerBox")[2 * options + 1].classList.remove("wrong");
  }
}