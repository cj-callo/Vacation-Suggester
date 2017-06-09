$(document).ready(function() {
  $("form#survey").submit(function(event) {
  var  personality = $("input:radio[name=type]:checked").val();
  var ideal = $("input:radio[name=action]:checked").val();
  var schedule = $("input:radio[name=time]:checked").val();
  var item = $("input:radio[name=tool]:checked").val();
  var food = $("input:radio[name=cusine]:checked").val();
  var people = $("input:radio[name=meet]:checked").val();
  var shoes = $("input:radio[name=comfortable]:checked").val();

  var place ="";

  if (personality === "risk" && ideal === "adventurous" && people === "few" && shoes === "hiking") {
      place = "Kilimanjaro, Tanzania";
    } else if (personality === "peaceful" && ideal === "mysterious" && food === "veggies") {
      place = "Goa, India";
    } else if (personality === "busy" && ideal === "educational" && schedule === "planned") {
      place = "London, UK";
    } else if (personality === "fun" && food === "drinks" && people === "lot") {
    place = "Rio de Janeiro, Brazil";
  } else if (personality === "risk" && food === "meats" && people === "lot") {
    place = "Berlin, Germany";
  } else if (personality === "peaceful" && ideal === "relaxing" && (shoes === "flip" || shoes === "barefoot")) {
    place = "Motu Teta, Tahiti";
  } else if (personality === "busy" && people === "lot" && item === "camera") {
    place = "Tokyo, Japan";
} else if (item === "makeup" && food === "restaurants" && shoes === "dress") {
    place = "Paris, France";
} else if (ideal = "adventurous" && item === "camera" && food === "veggies") {
    place = "Tropical forests of Costa Rica";
  } else if (personality === "risk" && people === "lot") {
    place = "Bangkok, Thailand";
  } else if (personality === "risk" && people === "few") {
    place = "'The Door to Hell', Derweze, Ahal Province, Turkmenistan";
  } else if (personality === "peaceful" && people === "lot") {
    place = "Great Wall of China";
  } else if (personality === "busy" && people === "few") {
    place = "Dubai, United Arab Emirates";
  } else if (personality === "fun" && people === "few") {
    place = "Stockholm, Sweden";
  } else if (ideal === "adventurous" && people === "few") {
      place = "Easter Island";
    } else if (ideal === "relaxing" && people === "lot") {
      place = "Cancun, Mexico";
    } else if (ideal === "educational" && people === "lot") {
      place = "Rome, Italy";
    } else if (ideal === "educational" && people === "few") {
      place = "Muiden, Neatherlands"
    } else if (ideal === "mysterious" && people === "lot") {
      place = "Machu Pechu, Peru";
    } else if (item === "camera" && people === "lot") {
       place = "Singapore";
    } else {
      place = "Stay home";
    }


    $("#place").text(place);
    $("#result").show();
  event.preventDefault();
});
});







// Possible countries to visit and attributes
// Nepal - peace-lover, mysterious, somewhere in between, book, a few, barefoot
//
