// Back End Logic
function userArray (numberStop) { 
  var numbers = [];
  for (let index = 0; index <= numberStop; index += 1) {
    var words = index.toString();

    if (words.includes(3)) {
      numbers.push("Won't you be my neighbor?");
    } else if (words.includes(2)) {
      numbers.push("Boop");
    } else if (words.includes(1)) {
      numbers.push("Beep");
    } else {
      numbers.push(words);
    }
    console.log("This is the index for every loop: " +index);
    // numbers.push(index);
  }
  return numbers;
}


// User Interface Logic
$(document).ready(function() {
    $("form#neighbor").submit(function(event) {
    event.preventDefault();
    var numberStop = ($("input#number").val()); 
    var result = userArray(numberStop);
      $("#outputPhrase").show();
      $("#outputNumbers").text(result);
     
    });
    
});
