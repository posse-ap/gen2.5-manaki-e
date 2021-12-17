'use strict'

// {
//   document.getElementById("1-1").onclick = function () {
//     let element = document.getElementById('1-1');
//     console.log('aaa', window.getComputedStyle(element).getPropertyValue('font-size'))

//     document.getElementById("1-1").style.fontSize = '20px' ;
//     // console.log(document)

//     // setTimeout(addClassTrue, 5*1000);

//     //中身を表示させたタイミングで最新の情報を取りに行く
//   };
// }

/*
  関数を作る
  1.ボタンがおされたときにクラス名を付ける
  クラス名をつける関数を作成
  button；引数
  id；引数かつ変数
  addClassの中で分岐を作る
  2.たかなわだけの正誤判定
  引数は複数可能

  答えの場所がランダムに変わってかつそれを指すことができる

  答えの場所を違う場所に設定
  data属性でvalid

  1-1-2
  1-2-2
  1-3-2  答えのidを推測（右）⇒1-2-2を探して変更

  一般性　ー答えの推測ー

*/

function addClass(trueId, clickedId) {
  document.getElementById(trueId).classList.add('true')
  if (trueId == clickedId) {
    document.getElementById("sucsess").classList.remove("correct");
  } else {
    document.getElementById("failed").classList.remove("wrong");
    document.getElementById(clickedId).classList.add('false');
  }
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