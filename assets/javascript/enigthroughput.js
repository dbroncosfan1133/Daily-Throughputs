
var days = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
var dailyThroughput = ["Daily Throughput"];
// For drawing the lines
var goal = [720,720,720,720,720];
var delta = [];
var enigGrave = [6,112,9,227,202];
var enigDay = [269,178,153,203,209];
var enigSwing = [225,154,288,190,255];

for (var i = 0; i <= goal.length-1; i++)
  delta.push((enigGrave[i] + enigDay[i] + enigSwing[i])- goal[i]);
  console.log(delta);

$("#results_here").append("<tr class='align'><th>" + "Grave:" + "</th>" + "<td>" + enigGrave[0] + 
"</td><td>" + enigGrave[1] + "</td><td>" + enigGrave[2] + 
"</td><td>" + enigGrave[3] + "</td><td>" + enigGrave[4] +
"</td></tr>" + "<tr class='align'><th>" + "Day:" + "</th>" + "<td>" + enigDay[0] +
"</td><td>" + enigDay[1] + "</td><td>" + enigDay[2] +
"</td><td>" + enigDay[3] + "</td><td>" + enigDay[4] +
"</td></tr>" + "<tr class='align'><th>" + "Swing:" + "</th>" + "<td>" + enigSwing[0] +
"</td><td>" + enigSwing[1] + "</td><td>" + enigSwing[2] +
"</td><td>" + enigSwing[3] + "</td><td>" + enigSwing[4] +
"</td></tr>" + "<tr class='align'><th>" + "Delta:" + "</th>" + "<td>" + delta[0] +
"</td><td>" + delta[1] + "</td><td>" + delta[2] +
"</td><td>" + delta[3] + "</td><td>" + delta[4] +
"</td></tr>")

var ctx = document.getElementById("enigThroughput");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: days,
    datasets: [
      {
        data: goal,
        label: "Goal per Day",
        type: 'line',
        borderColor: "#5e408f",
        backgroundColor: "#5e408f",
        fill: false
      },
      {
        data: delta,
        label: "Delta",
        type: 'line',
        borderColor: "#ff1900",
        backgroundColor: "#ff1900",
        fill: false
      },
      { 
        data: enigGrave,
        label: "Grave",
        backgroundColor: "#3e95cd",
        fill: true
        
      },
      {
        data: enigDay,
        label: "Day",
        backgroundColor: "#993737",
        fill: true
      },
      {
        data: enigSwing,
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
        stacked: true,
        ticks: {
          fontSize: 24
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          fontSize: 24,
          beginAtZero: true
        }
      }]
    },
  }
});



