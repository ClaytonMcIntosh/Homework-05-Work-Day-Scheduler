//Set current day with moment
let today = moment().format("dddd - MMM Do YYYY");
$("#currentDay").html(today);

//Color timeblock elements past present and future.

timeColours();

function timeColours() {
  let hourTime = moment().hours();

  //   console.log("hourTime = " + hourTime);

  $(".time-block").each(function () {
    let pastPresentFuture = parseInt($(this).attr("id"));

    console.log("pastPresentFuture1 = " + pastPresentFuture);
    // console.log("hourTime = " + hourTime);

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
