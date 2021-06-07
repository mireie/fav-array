$(document).ready(function() {
  $("form#things").submit(function(event) {
    event.preventDefault();

    const food = $("#food").val();
    const animal = $("#animal").val();
    const mineral = $("#mineral").val();
    const vegetable = $("#vegetable").val();
    const show = $("#show").val();
    const favThings = [food,animal,mineral,vegetable,show];
    const moreThings = [];
    moreThings.push(favThings[1],favThings[0],favThings[2]);
    console.log(favThings);
    console.log(moreThings);

    $("#thing1").text(moreThings[0]);
    $("#thing2").text(moreThings[1]);
    $("#thing3").text(moreThings[2]);
    
  });
  $("form#things").submit(function(event) {
    event.preventDefault();

    const evenMoreThings = [$("#food").val(),$("#animal").val(),$("#mineral").val(),$("#vegetable").val()];
    console.log(evenMoreThings);
  });
});