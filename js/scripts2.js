$(document).ready(function() {
  $("#blanks form").submit(function(event) {
  var nameInput = $("input#name").val();
  var homeInput = $("input#home").val();

  $(".name").append(nameInput);
  $(".home").append(homeInput);

  $("#result").show();
  event.preventDefault();

});
});
