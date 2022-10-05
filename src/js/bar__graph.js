let monthly = document.getElementById("monthly__statistics");

function myBarChart(dairy) {
  new Chart(monthly, {
    type: "bar",
    data: {
      labels: [
        "",
        "2",
        "",
        "4",
        "",
        "6",
        "",
        "8",
        "",
        "10",
        "",
        "12",
        "",
        "14",
        "",
        "16",
        "",
        "18",
        "",
        "20",
        "",
        "22",
        "",
        "24",
        "",
        "26",
        "",
        "30",
        "",
      ],
      datasets: [
        {
          label: "s",
          data: [
            dairy.day01,
            dairy.day02,
            dairy.day03,
            dairy.day04,
            dairy.day05,
            dairy.day06,
            dairy.day07,
            dairy.day08,
            dairy.day09,
            dairy.day10,
            dairy.day11,
            dairy.day12,
            dairy.day13,
            dairy.day14,
            dairy.day15,
            dairy.day16,
            dairy.day17,
            dairy.day18,
            dairy.day19,
            dairy.day20,
            dairy.day21,
            dairy.day22,
            dairy.day23,
            dairy.day24,
            dairy.day25,
            dairy.day26,
            dairy.day27,
            dairy.day28,
            dairy.day29,
            dairy.day30,
            dairy.day31,
          ],
          // data: [
          //   6.2, 6.5, 0.3, 3.5, 5.1, 6.6, 4.7, 0, 1.1, 1, 1, 4, 2.4, 1, 1, 2.4,
          //   0, 1, 1, 1, 3.1, 6.6, 7, 1, 3.2, 1, 1, 5,
          // ],
          backgroundColor: "rgb(0, 190, 255)",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: false,
      },
      title: {
        display: false,
        text: "支店別 来客数",
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              fontSize: 10,
              fontColor: "rgb(0, 190, 255)",
            },
          },
        ],
        yAxes: [
          {
            stacked: true,
            ticks: {
              suggestedMax: 8,
              suggestedMin: 0,
              stepSize: 2,
              fontColor: "rgb(0, 190, 255)",
              fontSize: 10,
              callback: function (value) {
                return value + "h";
              },
            },
            gridLines: {
              display: false,
              drawBorder: false,
            },
          },
        ],
      },
    },
  });
}

bar_graph();

async function bar_graph() {
  try {
    const url = "/api/getDairyInfo.php";
    const res = await fetch(url);
    const dairy = await res.json();
    myBarChart(dairy);
    console.log(dairy.day31);
  } catch (error) {
    console.log(error);
  }
}
