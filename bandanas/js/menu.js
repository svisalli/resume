$(document).ready(function(){
  var dinnerButton=$("#dinnerButton");
  var dessertButton=$("#dessertButton");

  var dinner=$("#dinner");
  var dessert=$("#dessert");
  var dinnerMenuButton=$("#dinnerMenuButton");
  var dessertMenuButton=$("#dessertMenuButton");

    dinner.css("display", "block");
    dinnerMenuButton.css("display", "block");
    dessert.css("display", "none");
    dessertMenuButton.css("display", "none");

  dinnerButton.on("click", function() {
    event.preventDefault();
    $("#dinnerMenuButton").fadeIn("slow");
    $("#dinner").fadeIn("slow");
    dessert.css("display", "none");
    dessertMenuButton.css("display","none");

  });


  dessertButton.on("click", function() {
    event.preventDefault();
    dinner.css("display", "none");
    dinnerMenuButton.css("display","none");
    $("#dessertMenuButton").fadeIn("slow");
    $("#dessert").fadeIn("slow");
  });


})

// FOOD

$(document).ready(function(){
  var appButton=$("#appButton");
  var quesaButton=$("#quesaButton");
  var nachoButton=$("#nachoButton");
  var sandButton=$("#sandButton");
  var tacoButton=$("#tacoButton");
  var saladButton=$("#saladButton");
  var mexEntreButton=$("#mexEntreButton");
  var usEntreButton=$("#usEntreButton");
  var sideButton=$("#sideButton");
  var kidsButton=$("#kidsButton");

  var app=$("#app");
  var quesa=$("#quesa");
  var nacho=$("#nacho");
  var sand=$("#sand");
  var taco=$("#taco");
  var salad=$("#salad");
  var mexEntre=$("#mexEntre");
  var usEntre=$("#usEntre");
  var side=$("#side");
  var kids=$("#kids");

  app.css("display", "block");
  quesa.css("display", "none");
  nacho.css("display", "none");
  sand.css("display", "none");
  taco.css("display", "none");
  salad.css("display", "none");
  mexEntre.css("display", "none");
  usEntre.css("display", "none");
  side.css("display", "none");
  kids.css("display", "none");

  appButton.on("click", function() {
    event.preventDefault();
    $("#app").fadeIn("slow");
    quesa.css("display", "none");
    nacho.css("display", "none");
    sand.css("display", "none");
    taco.css("display", "none");
    salad.css("display", "none");
    mexEntre.css("display", "none");
    usEntre.css("display", "none");
    side.css("display", "none");
    kids.css("display", "none");
  });

  quesaButton.on("click", function() {
    event.preventDefault();
    app.css("display", "none");
    $("#quesa").fadeIn("slow");
    nacho.css("display", "none");
    sand.css("display", "none");
    taco.css("display", "none");
    salad.css("display", "none");
    mexEntre.css("display", "none");
    usEntre.css("display", "none");
    side.css("display", "none");
    kids.css("display", "none");
  });

  nachoButton.on("click", function() {
    event.preventDefault();
    app.css("display", "none");
    quesa.css("display", "none");
    $("#nacho").fadeIn("slow");;
    sand.css("display", "none");
    taco.css("display", "none");
    salad.css("display", "none");
    mexEntre.css("display", "none");
    usEntre.css("display", "none");
    side.css("display", "none");
    kids.css("display", "none");
  });

  sandButton.on("click", function() {
    event.preventDefault();
    app.css("display", "none");
    quesa.css("display", "none");
    nacho.css("display", "none");
    $("#sand").fadeIn("slow");;
    taco.css("display", "none");
    salad.css("display", "none");
    mexEntre.css("display", "none");
    usEntre.css("display", "none");
    side.css("display", "none");
    kids.css("display", "none");
  });

  tacoButton.on("click", function() {
    event.preventDefault();
    app.css("display", "none");
    quesa.css("display", "none");
    nacho.css("display", "none");
    sand.css("display", "none");
    $("#taco").fadeIn("slow");;
    salad.css("display", "none");
    mexEntre.css("display", "none");
    usEntre.css("display", "none");
    side.css("display", "none");
    kids.css("display", "none");
  });

  saladButton.on("click", function() {
    event.preventDefault();
    app.css("display", "none");
    quesa.css("display", "none");
    nacho.css("display", "none");
    sand.css("display", "none");
    taco.css("display", "none");
    $("#salad").fadeIn("slow");;
    mexEntre.css("display", "none");
    usEntre.css("display", "none");
    side.css("display", "none");
    kids.css("display", "none");
  });

  mexEntreButton.on("click", function() {
    event.preventDefault();
    app.css("display", "none");
    quesa.css("display", "none");
    nacho.css("display", "none");
    sand.css("display", "none");
    taco.css("display", "none");
    salad.css("display", "none");
    $("#mexEntre").fadeIn("slow");;
    usEntre.css("display", "none");
    side.css("display", "none");
    kids.css("display", "none");
  });

  usEntreButton.on("click", function() {
    event.preventDefault();
    app.css("display", "none");
    quesa.css("display", "none");
    nacho.css("display", "none");
    sand.css("display", "none");
    taco.css("display", "none");
    salad.css("display", "none");
    mexEntre.css("display", "none");
    $("#usEntre").fadeIn("slow");;
    side.css("display", "none");
    kids.css("display", "none");
  });

  sideButton.on("click", function() {
    event.preventDefault();
    app.css("display", "none");
    quesa.css("display", "none");
    nacho.css("display", "none");
    sand.css("display", "none");
    taco.css("display", "none");
    salad.css("display", "none");
    mexEntre.css("display", "none");
    usEntre.css("display", "none");
    $("#side").fadeIn("slow");
    kids.css("display", "none");
  });

  kidsButton.on("click", function() {
    event.preventDefault();
    app.css("display", "none");
    quesa.css("display", "none");
    nacho.css("display", "none");
    sand.css("display", "none");
    taco.css("display", "none");
    salad.css("display", "none");
    mexEntre.css("display", "none");
    usEntre.css("display", "none");
    side.css("display", "none");
    $("#kids").fadeIn("slow");
  });

})



// DESSERTS

$(document).ready(function(){
  var sundaeButton=$("#sundaeButton");
  var splitsButton=$("#splitsButton");
  var crepeButton=$("#crepeButton");
  var waffleButton=$("#waffleButton");


  var sundae=$("#sundae");
  var splits=$("#splits");
  var crepe=$("#crepe");
  var waffle=$("#waffle");


  sundae.css("display", "block");
  splits.css("display", "none");
  crepe.css("display", "none");
  waffle.css("display", "none");

  sundaeButton.on("click", function() {
    event.preventDefault();
    $("#sundae").fadeIn("slow");
    splits.css("display", "none");
    crepe.css("display", "none");
    waffle.css("display", "none");


  });

  splitsButton.on("click", function() {
    event.preventDefault();
    sundae.css("display", "none");
    $("#splits").fadeIn("slow");
    crepe.css("display", "none");
    waffle.css("display", "none");
  });

  crepeButton.on("click", function() {
    event.preventDefault();
    sundae.css("display", "none");
    splits.css("display", "none");
    $("#crepe").fadeIn("slow");
    waffle.css("display", "none");
  });

  waffleButton.on("click", function() {
    event.preventDefault();
    sundae.css("display", "none");
    splits.css("display", "none");
    crepe.css("display", "none");
    $("#waffle").fadeIn("slow");
  });


})
