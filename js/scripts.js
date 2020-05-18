// // Back End Logic
// var inputNumbers = []
// var robogersArray = inputNumbers.slice("");


var numbers = parseInt($("input#number").val()); 





// User Interface Logic
$(document).ready(function() {
    $("form#neighbor").submit(function(event) {
    event.preventDefault();
      $("#output").show(numbers);
      $("#output").text(numbers);
     
    });

});
