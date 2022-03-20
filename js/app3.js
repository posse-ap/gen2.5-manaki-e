(function () {
  'use strict';

  function drawChart() {
    var target = document.getElementById('target');
    var data;
    var options = {
      width: "calc(100%)",
      height: "calc(100%)",
      animation: {
        startup: true,
        duration: 400,
        easing: 'inAndOut'
      },
      isStacked: true,
      vAxis: {
        format: '#h',
      },
    };
    var chart = new google.visualization.ColumnChart(target);
    data = new google.visualization.arrayToDataTable([
      ['date', 'ドットインストール', 'N予備校', 'POSSE課題'],
      ['', 1.2, 3.8, 1],
      ['2', 4.2, 1.8, 1.3],
      ['', 1.1, 5.8, 0],
      ['4', 1.2, 3.8, 1],
      ['', 4.2, 1.8, 1.3],
      ['6', 1.1, 5.8, 0],
      ['', 1.2, 3.8, 1],
      ['8', 4.2, 1.8, 1.3],
      ['', 1.1, 5.8, 0],
      ['10', 1.2, 3.8, 1],
      ['', 4.2, 1.8, 1.3],
      ['12', 1.1, 5.8, 0],
      ['', 1.2, 3.8, 1],
      ['14', 4.2, 1.8, 1.3],
      ['', 1.1, 5.8, 0],
      ['16', 1.2, 3.8, 1],
      ['', 4.2, 1.8, 1.3],
      ['18', 1.1, 5.8, 0],
      ['', 1.2, 3.8, 1],
      ['20', 4.2, 1.8, 1.3],
      ['', 1.1, 5.8, 0],
      ['22', 1.2, 3.8, 1],
      ['', 4.2, 1.8, 1.3],
      ['24', 1.1, 5.8, 0],
      ['', 4.2, 1.8, 1.3],
      ['26', 1.1, 5.8, 0],
      ['', 1.2, 3.8, 1],
      ['28', 4.2, 1.8, 1.3],
      ['', 1.1, 5.8, 0],
      ['30', 1.2, 3.8, 1],
      ['', 4.2, 1.8, 1.3]
    ]);
    chart.draw(data, options);
  }

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);
})();