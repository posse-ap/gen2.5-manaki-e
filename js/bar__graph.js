var monthly = document.getElementById("monthly__statistics");

var myBarChart = new Chart(monthly, {
  type: 'bar',
  data: {
    labels: ["", "2", "", "4", "", "6", "", "8", "", "10", "", "12", "", "14", "", "16", "", "18", "", "20", "", "22", "", "24", "", "26", "", "30", ""],
    datasets: [{
      label: 's',
      data: [6.2, 6.5, 0.3, 3.5, 5.1, 6.6, 4.7, 0, 1.1, 1, 1, 4, 2.4, 1, 1, 2.4, 0, 1, 1, 1, 3.1, 6.6, 7, 1, 3.2, 1, 1, 5],
      backgroundColor: "rgb(0, 190, 255)",
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      enabled: false
    },
    title: {
      display: false,
      text: '支店別 来客数'
    },
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          fontSize: 10,
          fontColor: "rgb(0, 190, 255)",
        },
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          suggestedMax: 8,
          suggestedMin: 0,
          stepSize: 2,
          fontColor: "rgb(0, 190, 255)",
          fontSize: 10,
          callback: function (value) {
            return value + 'h'
          },
        },
        gridLines: {
          display: false,
          drawBorder: false,
        }
      }]
    },
  },
});

// let lineChartData={
//   labels: ["", "2", "", "4", "", "6", "", "8", "", "10", "", "12", "", "14", "", "16", "", "18", "", "20", "", "22", "", "24", "", "26", "", "30", ""],
//   datasets: [{
//     label: 's',
//     order: 2,
//     data: [6.2, 6.5, 0.3, 3.5, 5.1, 6.6, 4.7, 0, 1.1, 1, 1, 4, 2.4, 1, 1, 2.4, 0, 1, 1, 1, 3.1, 6.6, 7, 1, 3.2, 1, 1, 5],
//     backgroundColor: "rgb(0, 190, 255)",
//   }]
// };

// var myLine = new Chart(monthly).BarAlt(lineChartData, {
//   // 0 (flat) to 1 (more curvy)
//   curvature: 1
// });