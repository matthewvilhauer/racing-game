// define globals

$(document).on("ready", function() {

  setInterval(movePlane, 20);
  var keys = [];

  $(document).keydown(function(e) {
      keys[e.keyCode] = true;
  });

  $(document).keyup(function(e) {
      delete keys[e.keyCode];
  });


  function movePlane() {
      for (var direction in keys) {
          if (!keys.hasOwnProperty(direction)) continue;
          if (direction == 37) {
              $("#plane").animate({left: "-=5"}, 0);
          }
          if (direction == 38) {
              $("#plane").animate({top: "-=5"}, 0);
          }
          if (direction == 39) {
              $("#plane").animate({left: "+=5"}, 0);
          }
          if (direction == 40) {
              $("#plane").animate({top: "+=5"}, 0);
          }
      }
  }

  // $(window).bind('keydown', function(event1) {
  //     var player1 = $("#player1");
  //     var left = 37;
  //     var up = 38;
  //     var right = 39;
  //     var down = 40;
  //
  //     if (event1.keyCode == left) {
  //         player1.animate({left: "-=50px"},5,'linear', updatePlayerPosition());
  //     }
  //     if (event1.keyCode == up) {
  //         player1.animate({top: "-=50px"},5,'linear', updatePlayerPosition());
  //     }
  //     if (event1.keyCode == right) {
  //         player1.animate({left:"+=50px"},5,'linear', updatePlayerPosition());
  //     }
  //     if (event1.keyCode == down) {
  //         player1.animate({top: "+=50px"},5,'linear', updatePlayerPosition());
  //     }
  // });
  //
  // $(window).bind('keydown', function(event2) {
  //   var player2 = $("#player2");
  //   var letterA = 65;
  //   var letterS = 83;
  //   var letterD = 68;
  //   var letterW = 87;
  //
  //   if (event2.keyCode == letterA) {
  //       player2.animate({left: "-=50px"},5,'linear', updatePlayerPosition());
  //   }
  //   if (event2.keyCode == letterW) {
  //       player2.animate({top: "-=50px"},5,'linear', updatePlayerPosition());
  //   }
  //   if (event2.keyCode == letterD) {
  //       player2.animate({left:"+=50px"},5,'linear', updatePlayerPosition());
  //   }
  //   if (event2.keyCode == letterS) {
  //       player2.animate({top: "+=50px"},5,'linear', updatePlayerPosition());
  //   }
  // });
});

// var updatePlayerPosition = function() {
//   console.log("Updating position");
// };
