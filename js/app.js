// define globals

$(document).on("ready", function() {

  $('.row').animate({'backgroundColor':'#8cd5f7'}, 2000);

  setInterval(movePlane, 20);
  var keys = [];

  $(document).keydown(function(e) {
      keys[e.keyCode] = true;
  });

  $(document).keyup(function(e) {
      delete keys[e.keyCode];
  });

  setInterval(movePlane2, 20);
  var keys2 = [];

  $(document).keydown(function(e) {
      keys2[e.keyCode] = true;
  });

  $(document).keyup(function(e) {
      delete keys2[e.keyCode];
  });


  function movePlane() {
      for (var direction in keys) {
          if (!keys.hasOwnProperty(direction)) continue;
          if (direction == 37) {
              $("#plane").animate({left: "-=10"}, 0, checkCollisions);
          }
          if (direction == 38) {
              $("#plane").animate({top: "-=10"}, 0, checkCollisions);
          }
          if (direction == 39) {
              $("#plane").animate({left: "+=10"}, 0, checkCollisions);
          }
          if (direction == 40) {
              $("#plane").animate({top: "+=10"}, 0, checkCollisions);
          }
        }
      }

  function movePlane2() {
      for (var direction in keys2) {
          if (!keys2.hasOwnProperty(direction)) continue;

          if (direction == 65) {
              $("#plane2").animate({left: "-=10"}, 0, checkCollisions);
          }
          if (direction == 87) {
              $("#plane2").animate({top: "-=10"}, 0, checkCollisions);
          }
          if (direction == 68) {
              $("#plane2").animate({left: "+=10"}, 0, checkCollisions);
          }
          if (direction == 83) {
              $("#plane2").animate({top: "+=10"}, 0, checkCollisions);
          }
      }
  }
});

function getPositions(box) {
  var $box = $(box);
  var pos = $box.position();
  var width = $box.width();
  var height = $box.height();
  return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
}

function comparePositions(p1, p2) {
  var x1 = p1[0] < p2[0] ? p1 : p2;
  var x2 = p1[0] < p2[0] ? p2 : p1;
  return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
}

function checkCollisions(){
  var box = $(".finish-line")[0];
  var pos = getPositions(box);

  var pos2 = getPositions(this);
  var horizontalMatch = comparePositions(pos[0], pos2[0]);
  var verticalMatch = comparePositions(pos[1], pos2[1]);
  var match = horizontalMatch && verticalMatch;
  if (match) { alert("You Won!"); }
}

/**
 * Define an object to hold all our images for the game so images
 * are only ever created once. This type of object is known as a
 * singleton.
 */

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
//   $(window).bind('keydown', function(event2) {
//     var player2 = $("#player2");
//     var letterA = 65;
//     var letterS = 83;
//     var letterD = 68;
//     var letterW = 87;
//
//     if (event2.keyCode == letterA) {
//         player2.animate({left: "-=50px"},5,'linear', updatePlayerPosition());
//     }
//     if (event2.keyCode == letterW) {
//         player2.animate({top: "-=50px"},5,'linear', updatePlayerPosition());
//     }
//     if (event2.keyCode == letterD) {
//         player2.animate({left:"+=50px"},5,'linear', updatePlayerPosition());
//     }
//     if (event2.keyCode == letterS) {
//         player2.animate({top: "+=50px"},5,'linear', updatePlayerPosition());
//     }
//   });
// });

// var updatePlayerPosition = function() {
//   console.log("Updating position");
// };
