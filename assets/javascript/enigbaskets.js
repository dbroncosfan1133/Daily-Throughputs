
var days = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
var dailyThroughput = ["Daily Throughput"];
// For drawing the lines
var goal = [54,54,54,54,54];
var delta = [];
var enigBGrave = [8,11,1,17,16];
var enigBDay = [18,17,17,18,18];
var enigBSwing = [17,8,17,19,13];
var enigBAver = [13.62,10.16,15.23,12.35,12.25];

for (var i = 0; i <= goal.length-1; i++)
  delta.push((enigBGrave[i] + enigBDay[i] + enigBSwing[i])- goal[i]);
  console.log(delta);

$("#results_here").append("<tr class='align'><th>" + "Grave:" + "</th>" + "<td>" + enigBGrave[0] + 
"</td><td>" + enigBGrave[1] + "</td><td>" + enigBGrave[2] + 
"</td><td>" + enigBGrave[3] + "</td><td>" + enigBGrave[4] +
"</td></tr>" + "<tr class='align'><th>" + "Day:" + "</th>" + "<td>" + enigBDay[0] +
"</td><td>" + enigBDay[1] + "</td><td>" + enigBDay[2] +
"</td><td>" + enigBDay[3] + "</td><td>" + enigBDay[4] +
"</td></tr>" + "<tr class='align'><th>" + "Swing:" + "</th>" + "<td>" + enigBSwing[0] +
"</td><td>" + enigBSwing[1] + "</td><td>" + enigBSwing[2] +
"</td><td>" + enigBSwing[3] + "</td><td>" + enigBSwing[4] +
"</td></tr>" + "<tr class='align'><th>" + "Delta:" + "</th>" + "<td>" + delta[0] +
"</td><td>" + delta[1] + "</td><td>" + delta[2] +
"</td><td>" + delta[3] + "</td><td>" + delta[4] +
"</td></tr>")

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
        fill: false,
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
        data: delta,
        label: "Delta",
        type: 'line',
        borderColor: "#ff0000",
        backgroundColor: "#ff0000",
        fill: false
      },
      { 
        data: enigBGrave,
        label: "Grave",
        backgroundColor: "#3e95cd",
        stack: "stack 0",
        fill: true
        
      },
      {
        data: enigBDay,
        label: "Day",
        backgroundColor: "#993737",
        stack: "stack 0",
        fill: true
      },
      {
        data: enigBSwing,
        label: "Swing",
        backgroundColor: "#53b589",
        stack: "stack 0",
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
      tooltips: {
        mode: 'index',
        intersect: true
      },
      scales: {
        xAxes:[{
          stacked: true,
          ticks: {
            fontSize: 24
          }
        }],
        yAxes: [{
          //stacked: true,
          ticks: {
            fontSize: 24,
            beginAtZero: true
          }
        }]
      },
  }
});
