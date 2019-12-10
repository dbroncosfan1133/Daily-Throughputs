
var days = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
var dailyThroughput = ["Daily Throughput"];
// For drawing the lines
var goal = [1400,1400,1400,1400,1400];
var delta = [];
var pmpGrave = [167,251,334,379,346];
var pmpDay = [488,643,557,523,513];
var pmpSwing = [364,376,512,435,490];

for (var i = 0; i <= goal.length-1; i++)
  delta.push((pmpGrave[i] + pmpDay[i] + pmpSwing[i])- goal[i]);
  console.log(delta);

$("#results_here").append("<tr class='align'><th>" + "Grave:" + "</th>" + "<td>" + pmpGrave[0] + 
"</td><td>" + pmpGrave[1] + "</td><td>" + pmpGrave[2] + 
"</td><td>" + pmpGrave[3] + "</td><td>" + pmpGrave[4] +
"</td></tr>" + "<tr class='align'><th>" + "Day:" + "</th>" + "<td>" + pmpDay[0] +
"</td><td>" + pmpDay[1] + "</td><td>" + pmpDay[2] +
"</td><td>" + pmpDay[3] + "</td><td>" + pmpDay[4] +
"</td></tr>" + "<tr class='align'><th>" + "Swing:" + "</th>" + "<td>" + pmpSwing[0] +
"</td><td>" + pmpSwing[1] + "</td><td>" + pmpSwing[2] +
"</td><td>" + pmpSwing[3] + "</td><td>" + pmpSwing[4] +
"</td></tr>" + "<tr class='align'><th>" + "Delta:" + "</th>" + "<td>" + delta[0] +
"</td><td>" + delta[1] + "</td><td>" + delta[2] +
"</td><td>" + delta[3] + "</td><td>" + delta[4] +
"</td></tr>")

var ctx = document.getElementById("pmpThroughput");
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
        data: pmpGrave,
        label: "Grave",
        backgroundColor: "#3e95cd",
        fill: true
        
      },
      {
        data: pmpDay,
        label: "Day",
        backgroundColor: "#993737",
        fill: true
      },
      {
        data: pmpSwing,
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



