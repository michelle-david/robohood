// Business Logic


// User Logic

$(document).ready(function () {
  $("form#form").submit(function () {
    event.preventDefault();
    const userNumber = parseInt($("input#userInput").val());
    let userArray = [];
    for (let i = 0; i <= userNumber; i++) {
      userArray.push(i);
    }
    let userString = userArray.toString();
    let makeString = userString.replace(/1/g, "Beep!")
    let string2 = makeString.replace(/2/g, "Boop")
    let string3 = string2.replace(/3/g, "Won't you be my neighbor?")
    string4 = string3.split(',').join(', ');
    $("#footer").show();
    $("#roboWords").text(string4);
  });
});

/*
    function makeString(number, phrase) {
      let makeString = userString.replace(number, phrase)
      return makeString
    }
    */
    