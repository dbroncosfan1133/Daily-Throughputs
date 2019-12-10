$(document).ready (function () {

//Chart.helpers.merge(Chart.defaults.global.plugins.datalabels, {
    //color: '#FE777B'
//});


var days = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
var dailyThroughput = ["Daily Throughput"];

var goal = [1200,1200,1200,1200,1200];
var delta = [];
var etchGrave = [252,440,346,413,295];
var etchDay = [311,221,425,252,347];
var etchSwing = [167,221,342,402,418];

for (var i = 0; i <= goal.length-1; i++)
  delta.push((etchGrave[i] + etchDay[i] + etchSwing[i])- goal[i]);
  console.log(delta);

$("#results_here").append("<tr class='align'><th>" + "Grave:" + "</th>" + "<td>" + etchGrave[0] + 
"</td><td>" + etchGrave[1] + "</td><td>" + etchGrave[2] + 
"</td><td>" + etchGrave[3] + "</td><td>" + etchGrave[4] +
"</td></tr>" + "<tr class='align'><th>" + "Day:" + "</th>" + "<td>" + etchDay[0] +
"</td><td>" + etchDay[1] + "</td><td>" + etchDay[2] +
"</td><td>" + etchDay[3] + "</td><td>" + etchDay[4] +
"</td></tr>" + "<tr class='align'><th>" + "Swing:" + "</th>" + "<td>" + etchSwing[0] +
"</td><td>" + etchSwing[1] + "</td><td>" + etchSwing[2] +
"</td><td>" + etchSwing[3] + "</td><td>" + etchSwing[4] +
"</td></tr>" + "<tr class='align'><th>" + "Delta:" + "</th>" + "<td>" + delta[0] +
"</td><td>" + delta[1] + "</td><td>" + delta[2] +
"</td><td>" + delta[3] + "</td><td>" + delta[4] +
"</td></tr>")

var ctx = document.getElementById("etchThroughput");
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
        fill: false,
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
        data: etchGrave,
        label: "Grave",
        backgroundColor: "#3e95cd",
        fill: true
      },
      {
        data: etchDay,
        label: "Day",
        backgroundColor: "#993737",
        fill: true
      },
      {
        data: etchSwing,
        label: "Swing",
        backgroundColor: "#53b589",
        fill: true
      }
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
      //plugins: {
        //datalabels: {
          //display: true,
          //color: "black",
          //align: 'center',
          //anchor: 'center'
      //}
    //},
  }
});

});