// Business Logic


// User Logic

$(document).ready(function () {
  $("form#form").submit(function () {
    event.preventDefault();
    // below converts user input into a string
    const userNumber = parseInt($("input#userInput").val());

    console.log(userNumber) // don't forget to remove!

    //below converts robo numbers into an array
    const roboNumbers = [1, 2, 3];

    //below is emtpy array for robotspeak
    let roboArray = [];

    // below converts user string into an array
    let userArray = [];
    console.log(userArray) // comment out
    for (let i = 0; i <= userNumber; i++) {
      userArray.push(i);
      console.log(userArray) // comment out
    }

    const robo1 = 1
    const robo2 = 2
    const robo3 = 3
    let newArray1 = userArray.indexOf(robo1);
    let newArray2 = userArray.indexOf(robo2)
    let newArray3 = userArray.indexOf(robo3)

    userArray.splice(newArray1, 1, "Beep");
    userArray.splice(newArray2, 1, "Boop");
    userArray.splice(newArray3, 1, "Won't you be my neighbor?")

    console.log(userArray)

  });
})