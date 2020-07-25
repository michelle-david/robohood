// Business Logic


// User Logic

$(document).ready(function() {
  $("form#form").submit(function() {
    event.preventDefault();
    // below converts user input into a string
    const userNumber = parseInt($("input#userInput").val());

    console.log(userNumber) // don't forget to remove!
    
    const roboNumbers = ["1", "2", "3"];

  // below converts user string into an array
  let userArray = [];
  for (let i=0; i <= userNumber ; i++){
  userArray.push(i);
  console.log(userArray)
 }


  });
})