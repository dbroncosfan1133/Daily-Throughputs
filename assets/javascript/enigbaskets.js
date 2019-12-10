
var days = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
var dailyThroughput = ["Daily Throughput"];
// For drawing the lines
var goal = [18,18,18,18,18];
var enigBGrave = [8,11,1,17,16];
var enigBDay = [18,17,17,18,18];
var enigBSwing = [17,8,17,19,13];
var enigBAver = [13.62,10.16,15.23,12.35,12.25];


var ctx = document.getElementById("enigBasketThroughput");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: days,
    datasets: [
      {
        data: goal,
        label: "Goal per Shift",
        type: 'line',
        borderColor: "#5e408f",
        backgroundColor: "#5e408f",
        fill: false
      },
      {
        data:enigBAver,
        label: "Average per Basket",
        type: 'line',
        borderColor: "#f5ba45",
        backgroundColor: "#f5ba45",
        fill: false
      },
      
      { 
        data: enigBGrave,
        label: "Grave",
        backgroundColor: "#3e95cd",
        fill: true
        
      },
      {
        data: enigBDay,
        label: "Day",
        backgroundColor: "#993737",
        fill: true
      },
      {
        data: enigBSwing,
        label: "Swing",
        backgroundColor: "#53b589",
        fill: true
      },
    ]
  },
    options: {
      legend: {
        display: true,
        labels: {
          fontSize: 30
        }
      },
    scales: {
      xAxes:[{
        ticks: {
          fontSize: 24
        }
      }],
      yAxes: [{
        ticks: {
          fontSize: 24,
          beginAtZero: true
        }
      }]
    }
  }
});
