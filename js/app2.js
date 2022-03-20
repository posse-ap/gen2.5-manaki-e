'use strict';

let monthly = document.getElementById("monthly__statistics");
let array = new Array
for (let i = 1; i < 32; i++) {
  array.push(i);
}

let chart3 = new Chart(monthly, {

  type: 'bar',

  data: {
    labels: ["", "2", "", "4", "", "6", "", "8", "", "10", "", "12", "", "14", "", "16", "", "18", "", "20", "", "22", "", "24", "26", "28", "30", ""],
    datasets: [{
      label: "日本の人口推移",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      backgroundColor: "blue",
      borderColor: "red",
      borderWidth: "1px",
    }, {
      label: "みかんの生産量(仮)",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      backgroundColor: "rgb(91, 64, 243)",
    }, {
      label: "いちごの生産量(仮)",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      backgroundColor: "rgb(64, 147, 243)",
    }],
  },

  options: {
    scales: {
      x: {
        stacked: true,
        display: false,
        ticks: {
          suggestedMax: 50,
          suggestedMin: 0,
          stepSize: 5,
          callback: function (value) {
            return value + '人'
          }
        }
      },
      y: {
        stacked: true,
        display: false
      }
    },
    responsive: false,
  }
});