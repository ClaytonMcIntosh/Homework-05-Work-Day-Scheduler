//Set current day with moment
let today = moment().format("dddd - MMM Do YYYY");
$("#currentDay").html(today);

//Color timeblock elements past present and future.

timeColours();

function timeColours() {
  let hourTime = moment().hours();

  //   console.log("hourTime = " + hourTime);

  $(".time-block").each(function () {
    let pastPresentFuture = parseInt($(".time-block").attr("id"));

  console.log("pastPresentFuture1 = " + pastPresentFuture);
    // console.log("hourTime = " + hourTime);

    if (pastPresentFuture < hourTime) {
      $(".time-block").removeClass("future");
      $(".time-block").removeClass("present");
      $(".time-block").addClass("past");
    } else if (pastPresentFuture === hourTime) {
      $(".time-block").removeClass("future");
      $(".time-block").addClass("present");
      $(".time-block").removeClass("past");
    } else {
      $(".time-block").addClass("future");
      $(".time-block").removeClass("present");
      $(".time-block").removeClass("past");
    }
  });
}
