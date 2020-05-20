// // Back End Logic
// var inputNumbers = []
// var weirdNumbers = [];
//   inputNumbers.forEach(function(inputNumber) {
//     weirdNumbers.push(inputNumber)
//   });

// var robogersArray = inputNumbers.slice("");


function userArray (numberStop) { 
  var numbers = [];
  for (let index = 0; index <= numberStop; index += 1) {
    numbers.push(index);
    console.log("This is the index for every loop: " +index);
  }
  return numbers;
}



// User Interface Logic
$(document).ready(function() {
    $("form#neighbor").submit(function(event) {
    event.preventDefault();
    var numberStop = parseInt($("input#number").val()); 
    var result = userArray(numberStop);
      $("#outputPhrase").show();
      $("#outputNumbers").text(result);
     
    });
    
});
