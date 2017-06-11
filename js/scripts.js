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

    if (personality === "risk" && ideal === "adventurous" && people === "few" && shoes   === "hiking" && item === "kit") {
      place = "Kilimanjaro, Tanzania";
      $("#tanzania").show();
    } else if (personality === "peaceful" && ideal === "mysterious" && food === "veggies") {
      place = "Goa, India";
      $("#goa").show();
    } else if (personality === "busy" && ideal === "educational" && schedule === "planned") {
      place = "London, UK";
      $("#london").show();
    } else if (personality === "fun" && food === "drinks" && people === "lot") {
      place = "Rio de Janeiro, Brazil";
      $("#rio").show();
    } else if (personality === "risk" && food === "meats" && people === "lot") {
      place = "Berlin, Germany";
      $("#berlin").show();
    } else if (personality === "peaceful" && ideal === "relaxing" && (shoes === "flip" || shoes === "barefoot")) {
      place = "Motu Teta, Tahiti";
      $("#tahiti").show();
    } else if (personality === "busy" && people === "lot" && item === "camera") {
      place = "Tokyo, Japan";
      $("#tokyo").show();
    } else if (item === "makeup" && food === "restaurants" && shoes === "dress") {
      place = "Paris, France";
      $("#paris").show();
    } else if (ideal = "adventurous" && item === "camera" && food === "veggies") {
      place = "Tropical forests of Costa Rica";
      $("#costa").show();
    } else if (personality === "risk" && people === "lot") {
      place = "Bangkok, Thailand";
      $("#bangkok").show();
    } else if (personality === "risk" && people === "few") {
      place = "Nunavut, Canada";//check spelling
      $("#nunavut").show();
    } else if (personality === "peaceful" && people === "lot") {
      place = "Great Wall of China";
      $("china").show();
    } else if (personality === "busy" && people === "few") {
      place = "Dubai, United Arab Emirates";
      $("#dubai").show();
    } else if (personality === "fun" && people === "few") {
      place = "Stockholm, Sweden";
      $("#stockholm").show();
    } else if (ideal === "adventurous" && people === "few") {
      place = "Easter Island";
      $("#easter").show();
    } else if (ideal === "relaxing" && people === "lot") {
      place = "Cancun, Mexico";
      $("#cancun").show();
    } else if (ideal === "educational" && people === "lot") {
      place = "Rome, Italy";
      $("#rome").show();
    } else if (ideal === "educational" && people === "few") {
      place = "Muiden, Neatherlands"
      $("#muiden").show();
    } else if (ideal === "mysterious" && people === "lot") {
      place = "Machu Pechu, Peru";
      $("#peru").show();
    } else if (item === "camera" && people === "lot") {
      place = "Singapore";
      $("#singapore").show();
    } else if (shoes === "flip") {
      place = "Maui, Hawaii";
      $("#maui").show();
    } else if (shoes === "dress") {
      place = "Manhattan, New York";
      $("#Manhattan").show();
    } else {
      place = "uuh..stay home!";
      $("#cottage").show();
    }

    $("#place").text(place);
    $("#result").show();

    //blank form submission functions not working, taken out, need to fix

    event.preventDefault();

  });
});









// Possible countries to visit and attributes
// Nepal - peace-lover, mysterious, somewhere in between, book, a few, barefoot
//
