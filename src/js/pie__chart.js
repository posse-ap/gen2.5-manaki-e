"use strict";

let month = document.getElementById("monthly__statistics");
let languages = document.getElementById("languages__statistics");
let contents = document.getElementById("contents__statistics");

/* =====================================
plugin
===================================== */

let plugin = {
  afterDatasetsDraw: function (chart) {
    // To only draw at the end of animation, check for easing === 1
    var ctx = chart.ctx;

    chart.data.datasets.forEach(function (dataset, i) {
      var dataSum = 0;
      dataset.data.forEach(function (element) {
        dataSum += element;
      });

      var meta = chart.getDatasetMeta(i);
      if (!meta.hidden) {
        meta.data.forEach(function (element, index) {
          // Draw the text in black, with the specified font
          ctx.fillStyle = "rgb(255, 255, 255)";

          var fontSize = 1;
          ctx.font = Chart.helpers.fontString(fontSize);

          if (dataset.data[index] > 10) {
            // Just naively convert to string for now
            var dataString =
              (
                Math.round((dataset.data[index] / dataSum) * 1000) / 10
              ).toString() + "%";

            // Make sure alignment settings are correct
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            var padding = 5;
            var position = element.tooltipPosition();
            ctx.fillText(
              dataString,
              position.x,
              position.y + fontSize / 2 - padding
            );
          }
        });
      }
    });
  },
};

/* =====================================
chats.js
===================================== */

function pie_languages(language) {
  new Chart(languages, {
    type: "doughnut",
    data: {
      // labels: ["JavaScript", "CSS", "PHP", "HTML", "Lalavel", "SQL", "SHELL", "情報システム基礎知識（その他）"],
      datasets: [
        {
          backgroundColor: [
            "blue",
            "rgb(91, 64, 243)",
            "rgb(64, 147, 243)",
            "rgb(135, 210, 245)",
            "rgb(231, 175, 236)",
            "rgb(97, 8, 105)",
            "rgb(72, 29, 112)",
            "rgb(113, 115, 235)",
          ],
          data: [
            Number(language.JavaScript),
            Number(language.CSS),
            Number(language.PHP),
            Number(language.HTML),
            Number(language.Lalavel),
            Number(language.SQL),
            Number(language.SHELL),
            Number(language.情報システム基礎知識),
          ],
          borderWidth: [1],
        },
      ],
    },
    options: {
      title: {
        display: false,
        text: "学習言語",
      },
      tooltips: {
        enabled: false,
      },
    },
    plugins: [plugin],
  });
}

function pie_contents(content) {
  new Chart(contents, {
    type: "doughnut",
    data: {
      // labels: ["ドットインストール", "N予備校", "POSSE課題"],
      datasets: [
        {
          backgroundColor: ["blue", "rgb(91, 64, 243)", "rgb(64, 147, 243)"],
          data: [
            Number(content.ドットインストール),
            Number(content.N予備校),
            Number(content.POSSE課題),
          ],
          borderWidth: [1],
        },
      ],
    },
    options: {
      title: {
        display: false,
        text: "学習コンテンツ",
      },
      tooltips: {
        enabled: false,
      },
    },
    plugins: [plugin],
  });
}

draw_pie_chart();

async function draw_pie_chart() {
  try {
    const url = "/api/getLanguageInfo.php";
    const res = await fetch(url);
    const language = await res.json();
    pie_languages(language);
    console.log(language);
  } catch (error) {
    console.log(error);
  }

  try {
    const url = "/api/getContentInfo.php";
    const res = await fetch(url);
    const content = await res.json();
    pie_contents(content);
    console.log(content);
  } catch (error) {
    console.log(error);
  }
}
