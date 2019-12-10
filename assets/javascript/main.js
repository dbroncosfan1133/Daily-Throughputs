$(document).ready(function () {

$("#weekBtn").on("click", function () {
  var date = prompt("Enter Week Start Date");
  var enteredDate = ("Week Starting: " + date);
  $("#week").text(enteredDate);
  localStorage.clear();
  localStorage.setItem("weekStore", enteredDate);
});
  $("#week").text(localStorage.getItem("weekStore"));
});