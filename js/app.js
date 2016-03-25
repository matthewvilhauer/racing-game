// define globals

$(document).on("ready", function() {

  $(window).on('keyup', function(event1) {
      var player1 = $("#player1");
      var left = 37;
      var up = 38;
      var right = 39;
      var down = 40;

      if (event1.keyCode == left) {
          player1.animate({left: "-=20px"},5);
      }
      if (event1.keyCode == up) {
          player1.animate({top: "-=20px"},5);
      }
      if (event1.keyCode == right) {
          player1.animate({left:"+=20px"},5);
      }
      if (event1.keyCode == down) {
          player1.animate({top: "+=20px"},5);
      }
  });

  $(window).on('keyup', function(event2) {
    var player2 = $("#player2");
    var letterA = 65;
    var letterS = 83;
    var letterD = 68;
    var letterW = 87;

    if (event2.keyCode == letterA) {
        player2.animate({left: "-=20px"},5);
    }
    if (event2.keyCode == letterW) {
        player2.animate({top: "-=20px"},5);
    }
    if (event2.keyCode == letterD) {
        player2.animate({left:"+=20px"},5);
    }
    if (event2.keyCode == letterS) {
        player2.animate({top: "+=20px"},5);
    }
  });
});
