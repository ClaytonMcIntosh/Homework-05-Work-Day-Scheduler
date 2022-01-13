//Set current day with moment
let today = moment().format("dddd - MMM Do YYYY");
$("#currentDay").html(today);

//Color timeblock elements past present and future.

timeColours();

function timeColours() {
  let hourTime = moment().hours();

  $(".time-block").each(function () {
    let pastPresentFuture = parseInt($(this).attr("id"));

    if (pastPresentFuture < hourTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (pastPresentFuture === hourTime) {
      $(this).removeClass("future");
      $(this).addClass("present");
      $(this).removeClass("past");
    } else {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    }
  });
}

//Get local storage and save to local storage on click of save button

//9am - get
let g9 = localStorage.getItem("9am");
$("#9am").val(g9);
//9am - set
let data9 = $("#9am");
$(".saveBtn").on("click", function () {
  localStorage.setItem("9am", data9.val());
});

//10am - get
let g10 = localStorage.getItem("10am");
$("#10am").val(g10);
//10am
let data10 = $("#10am");
$(".saveBtn").on("click", function () {
  localStorage.setItem("10am", data10.val());
});

//11am - get
let g11 = localStorage.getItem("11am");
$("#11am").val(g11);
//11am - set
let data11 = $("#11am");
$(".saveBtn").on("click", function () {
  localStorage.setItem("11am", data11.val());
});

//12pm - get
let g12 = localStorage.getItem("12pm");
$("#12pm").val(g12);
//12pm - set
let data12 = $("#12pm");
$(".saveBtn").on("click", function () {
  localStorage.setItem("12pm", data12.val());
});

//1pm - get
let g1 = localStorage.getItem("1pm");
$("#1pm").val(g1);
//1pm - set
let data1 = $("#1pm");
$(".saveBtn").on("click", function () {
  localStorage.setItem("1pm", data1.val());
});

//2pm - get
let g2 = localStorage.getItem("2pm");
$("#2pm").val(g2);
//2pm - set
let data2 = $("#2pm");
$(".saveBtn").on("click", function () {
  localStorage.setItem("2pm", data2.val());
});

//3pm - get
let g3 = localStorage.getItem("3pm");
$("#3pm").val(g3);
//3pm - set
let data3 = $("#3pm");
$(".saveBtn").on("click", function () {
  localStorage.setItem("3pm", data3.val());
});

//4pm - get
let g4 = localStorage.getItem("4pm");
$("#4pm").val(g4);
//4pm - set
let data4 = $("#4pm");
$(".saveBtn").on("click", function () {
  localStorage.setItem("4pm", data4.val());
});

//5pm - get
let g5 = localStorage.getItem("5pm");
$("#5pm").val(g5);
//5pm - set
let data5 = $("#5pm");
$(".saveBtn").on("click", function () {
  localStorage.setItem("5pm", data5.val());
});
