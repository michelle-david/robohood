// Business Logic


// User Logic

$(document).ready(function() {
  $("form#form").submit(function() {
    event.preventDefault();
    const userNumber = parseInt($("input#userInput").val());

    console.log(userNumber)

  });
  });