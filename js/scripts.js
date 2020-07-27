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

    const robo1 = 1;
    const robo2 = 2;
    const robo3 = 3;

    let newArray1 = userArray.indexOf(robo1);
    let newArray2 = userArray.indexOf(robo2);
    let newArray3 = userArray.indexOf(robo3);

    userArray.splice(newArray1, 1, "Beep!");
    userArray.splice(newArray2, 1, "Boop");
    userArray.splice(newArray3, 1, "Won't you be my neighbor?");

    $("#footer").show();
    $("#roboWords").text(userArray);

  });
})