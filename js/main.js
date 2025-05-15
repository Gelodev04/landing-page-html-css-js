//line graph
const ctx = document.getElementById("profitChart").getContext("2d");

const profitChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: [300, 450, 600, 700, 1200],
        fill: true, // This fills the area under the line
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.1, // curve
        borderWidth: 1,
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
        pointRadius: 3,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 1500,
        ticks: {
            color: "#000",
          stepSize: 500, // Controls the interval between ticks
          callback: function (value) {
            return value; // You can format here if needed, e.g. return value + "원";
          },
        },
      },
    },
  },
});

//BAR GRAPH

const ctx2 = document.getElementById('storeChart').getContext('2d');

new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['프랜차이즈 매장', '개인연합 매장', '옆커폰 매장'],
    datasets: [{
      label: '동종업계 매장 수',
      data: [20, 30, 420],
      backgroundColor: 'rgba(54, 162, 235, 1)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y', // ✅ makes it horizontal
    plugins: {
      legend: {
        display: false,
        labels: {
          font: {
            size: 14
          }
        }
      },
      datalabels: {
        anchor: 'end',
        align: 'right',
        color: '#3498db',
        font: {
          weight: 'bold'
        },
        formatter: (value) => `${value}개`
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 500,
        ticks: {
        color: '#000',
          stepSize: 100,
          callback: value => `${value}개`
        }
      },
      y: {
        ticks: {
            color: '#000'
        }
      }
    }
  },
  plugins: [ChartDataLabels]
});

const ctx3 = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx3, {
    type: 'line',
    data: {
      labels: [2012, 2013, 2014, 2016, 2017, 2020, 2021, 2024],
      datasets: [{
        label: 'Value',
        data: [50, 70, 90, 92, 93.8, 94.2, 95, 98],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: '#36A2EB',
        borderWidth: 1,
        fill: true,
        tension: 0.1,
        pointBackgroundColor: '#36A2EB',
        pointRadius: 3
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          ticks: {
             color: '#000',
          }
      },
        y: {
          beginAtZero: true,
          max: 100,
          
           ticks: {
             color: '#000',
            stepSize: 20, // Shows only 0, 20, 40, 60, 80, 100
          }
        }
      },
      
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: true
        }
      }
    }
  });