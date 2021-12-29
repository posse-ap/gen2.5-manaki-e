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


for (let i = 0; i < answers.length; i++) {
  document.body.insertAdjacentHTML('beforeend', '<div class="main" id="main"></div>');
  const main = document.getElementsByClassName("main")[i];
  main.insertAdjacentHTML('beforeend', `<h1 class="question">${i + 1}. この地名はなんて読む？</h1>`);
  main.insertAdjacentHTML('beforeend', `<div class="picture"><img src="question${i}.png" alt="高輪"></div>`);
  main.insertAdjacentHTML('beforeend', '<div class="option-box" id="option-box"></div>');
  const optionBox = document.getElementsByClassName("option-box")[i];
    for (let j = 0; j < 3; j++) {
      optionBox.insertAdjacentHTML('beforeend', `<h3 class="option" id="${i}_${j}" onclick="addClass('${i}', '${j}')">` + option[i][j] + "</h3>")
    };
  main.insertAdjacentHTML('beforeend', '<div class="answerBox correct" id="sucsess"></div>')
  const sucsess = document.getElementsByClassName('correct')[i];
  sucsess.insertAdjacentHTML('beforeend', '<p class="correctResult">正解！</p>')
  sucsess.insertAdjacentHTML('beforeend', `<p class="answerSentence">正解は「${answers[i]}」です！</p>`)
  main.insertAdjacentHTML('beforeend', '<div class="answerBox wrong" id="failed"></div>')
  const failed = document.getElementsByClassName('wrong')[i];
  failed.insertAdjacentHTML('beforeend', '<p class="wrongResult">不正解！</p>')
  failed.insertAdjacentHTML('beforeend', `<p class="answerSentence">正解は「${answers[i]}」です！</p>`)1

}
  function addClass(questionId, clickedId) {
    let aaaaa = option[questionId].indexOf(answers[questionId]);
    document.getElementById(questionId + "_" + aaaaa).classList.add('true');
    console.log(aaaaa);
    // document.getElementsByClassName().classList.add('true');
    document.getElementsByClassName('option-box')[questionId].classList.add('clicked-option-box');
    if (option[questionId][clickedId] === answers[questionId]) {
      document.getElementsByClassName("answerBox")[2*questionId].classList.remove("correct");
    } else {
      document.getElementById(questionId + "_" + clickedId).classList.add("false");
      document.getElementsByClassName("answerBox")[2*questionId+1].classList.remove("wrong");
    }
    
    
    // function addClass(optionId, clickedId) {
      //   document.getElementById(optionId).classList.add('true');
      //   document.getElementsByClassName('option-box')[i].classList.add('clicked-option-box');
      //   if (optionId === clickedId) {
        //     document.getElementsByClassName("answerBox")[2*i-1].classList.remove("correct");
        //   } else {
          //     document.getElementsByClassName("answerBox")[2*i].classList.remove("wrong");
          //     document.getElementById(clickedId).classList.add('false');
          //   }
          // }
        }
        // for (let index = 1; index < 5; index++) {
          //   console.log(`${index}-1`);
          // }
          
          // for (let index = 1; index < 5; index++) {
            //   const box = document.createElement('div'); //divタグの生成
            //   box.classList.add(`${index}-1`) //クラスを加える
            //   //
            //   document.getElementsByClassName('main')[0].insertAdjacentElement('beforeend', box)//挿入
            //   console.log(index);
            
            //   for (let option = 1; option < 4; option++) {
              //     console.log(`${index}-${option}`);
//   }
// }