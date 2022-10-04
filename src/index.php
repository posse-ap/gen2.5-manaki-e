<?php
session_start();
require('dbconnect.php');

phpinfo();
?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>webapp</title>
  <link rel="stylesheet" href="./css/reset.css" />
  <link rel="stylesheet" href="./css/style.css" />
</head>

<body>
  <header class="header">
    <div class="header__logo">
      <img src="./img/posse_logo.jpg" alt="POSSE" width="485" height="108" />
    </div>
    <div class="header__week">
      <span>4th week</span>
    </div>
    <div class="header__submit" id="pc">
      <button type="submit" class="push__button">記録・投稿</button>
    </div>
  </header>

  <main class="main">
    <div class="container">
      <div class="record today__number">
        <div class="center">
          <div class="record__title">Today</div>
          <input type="" id="" value="3" />
          <span class="record__hour">hour</span>
        </div>
      </div>
      <div class="record month__number">
        <div class="center">
          <div class="record__title">Month</div>
          <input type="" id="" value="120" />
          <span class="record__hour">hour</span>
        </div>
      </div>
      <div class="record total__number">
        <div class="center">
          <div class="record__title">Total</div>
          <input type="" id="" value="1348" />
          <span class="record__hour">hour</span>
        </div>
      </div>
      <div class="record month__report">
        <canvas class="bar__graph" id="monthly__statistics"></canvas>
      </div>
      <div class="record languages__report">
        <div class="graph__title">学習言語</div>
        <canvas class="pie__chart" id="languages__statistics" style="position: relative; height: 30rem; width: 30rem"></canvas>
        <ul class="option__list">
          <span class="circle" style="background-color: blue"></span>
          <li class="option__item">JavaScript</li>
          <span class="circle" style="background-color: rgb(91, 64, 243)"></span>
          <li class="option__item">CSS</li>
          <span class="circle" style="background-color: rgb(64, 147, 243)"></span>
          <li class="option__item">PHP</li>
          <br />
          <span class="circle" style="background-color: rgb(135, 210, 245)"></span>
          <li class="option__item">HTML</li>
          <span class="circle" style="background-color: rgb(231, 175, 236)"></span>
          <li class="option__item">Laravel</li>
          <span class="circle" style="background-color: rgb(97, 8, 105)"></span>
          <li class="option__item">SQL</li>
          <br />
          <span class="circle" style="background-color: rgb(72, 29, 112)"></span>
          <li class="option__item">SHELL</li>
          <br />
          <span class="circle" style="background-color: rgb(113, 115, 235)"></span>
          <li class="option__item">情報システム基礎知識(その他)</li>
        </ul>
      </div>
      <div class="record contents__report">
        <div class="graph__title">学習コンテンツ</div>
        <canvas class="pie__chart" id="contents__statistics" style="position: relative; height: 30rem; width: 30rem"></canvas>
        <ul class="option__list">
          <span class="circle" style="background-color: blue"></span>
          <li class="option__item">ドットインストール</li>
          <br />
          <span class="circle" style="background-color: rgb(72, 29, 112)"></span>
          <li class="option__item">N予備校</li>
          <br />
          <span class="circle" style="background-color: rgb(113, 115, 235)"></span>
          <li class="option__item">POSSE課題</li>
        </ul>
      </div>
      <div class="date">
        <button class="date__back">＜</button>
        <span class="date__appear">2022年3月</span>
        <button class="date__front">＞</button>
      </div>
      <div class="sp__push">
        <button type="submit" class="push__button">記録・投稿</button>
      </div>
    </div>
  </main>

  <div class="modal">
    <div class="modals">
      <div class="modal-wrap">
        <div class="modal-bg"></div>
        <div class="modal-box">
          <div class="modal__inners">
            <div class="modal__inner1">
              <div class="modal__inner__close"><span>✖</span></div>
              <ul class="modal__inner__list">
                <li class="modal__inner__item">
                  学習日
                  <div class="textbox">
                    <input type="date" name="date" required value="" />
                  </div>
                </li>
                <li class="modal__inner__item">
                  学習コンテンツ（複数選択可）
                  <ul class="checkbox__list">
                    <li class="checkbox__item">
                      <label><input class="check" type="checkbox" /><span>N予備校</span></label>
                    </li>
                    <li class="checkbox__item">
                      <!-- <input type="checkbox">ドットインストール -->
                      <input type="checkbox" id="dotinstall" /><label for="dotinstall">ドットインストール</label>
                    </li>
                    <br />
                    <li class="checkbox__item">
                      <input type="checkbox" />POSSE課題
                    </li>
                  </ul>
                </li>
                <li class="modal__inner__item">
                  学習言語
                  <ul class="checkbox__list">
                    <li class="checkbox__item">
                      <input type="checkbox" />HTML
                    </li>
                    <li class="checkbox__item">
                      <input type="checkbox" />CSS
                    </li>
                    <li class="checkbox__item">
                      <input type="checkbox" />JavaScript
                    </li>
                    <br />
                    <li class="checkbox__item">
                      <input type="checkbox" />PHP
                    </li>
                    <li class="checkbox__item">
                      <input type="checkbox" />Lalavel
                    </li>
                    <li class="checkbox__item">
                      <input type="checkbox" />SQL
                    </li>
                    <li class="checkbox__item">
                      <input type="checkbox" />SHELL
                    </li>
                    <br />
                    <li class="checkbox__item">
                      <input type="checkbox" />情報システム基礎知識（その他）
                    </li>
                  </ul>
                </li>
                <li class="modal__inner__item">
                  学習時間
                  <div class="textbox">
                    <input type="text" name="" id="" />
                  </div>
                </li>
                <li class="modal__inner__item">
                  Twitter用コメント
                  <div class="textbox">
                    <input type="text" name="twitter" id="twitter__text" value="" />
                  </div>
                  <div>
                    <input type="checkbox" name="" id="twitter" />Twitterにシェアする
                  </div>
                </li>
              </ul>
              <div class="modal__inner__push">
                <a>
                  <button type="submit" class="push__button">
                    記録・投稿
                  </button>
                </a>
              </div>
            </div>
            <div class="modal__inner2">
              <div class="modal__inner__loading">
                <img src="./img/loading.png" alt="loading..." height="662" width="662" />
              </div>
            </div>
            <div class="modal__inner3">
              <div class="modal__inner__complete">
                <p>AWESOME!</p>
                <div class="checkmark"></div>
                <p>記録・投稿<br />完了しました</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.js"></script>
  <script src="./js/jquery-3.6.0.min.js"></script>
  <script src="./js/modal.js"></script>
  <script src="./js/bar__graph.js"></script>
  <script src="./js/pie__chart.js"></script>
</body>

</html>