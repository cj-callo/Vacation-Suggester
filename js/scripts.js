$(document).ready(function() {
  $("form#survey").submit(function(event) {
  var  personality = $("input:radio[name=type]:checked").val();
  var ideal = $("input:radio[name=action]:checked").val();
  var schedule = $("input:radio[name=time]:checked").val();
  var item = $("input:radio [name=object]:checked").val();
  var food = $("input:radio[name=cusine]:checked").val();
  var people = $("input:radio[name=meet]:checked").val();
  var shoes = $("input:radio[name=comfortable]:checked").val();

  var place ="";

//  if (characteristic === "bravery" && color === "scarlet") {
//    house = "Griffindor";
//  } else if (characteristic === "bravery" && animal === "lion") {
  //  house = "Griffindor";

  if (personality === "risk" && ideal === "adventurous" && people === "few" && shoes === "hiking") {
      place = "Annapurna, Nepal";
    } else if (personality === "peaceful" && ideal === "mysterious" && item === "book" && food === "veggies") {
      place = "Goa, India";
      else if
    } else {
      place = "Stay home"
    }


    $("#place").text(place);
    $("#result").show();
  event.preventDefault();
});
});







// Possible countries to visit and attributes
// Nepal - peace-lover, mysterious, somewhere in between, book, a few, barefoot
//
