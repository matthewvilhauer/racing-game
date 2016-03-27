// define globals
$plane = $("#plane");
$helicopter = $("#helicopter");
$plane.name = "Player 1";
$helicopter.name = "Player 2";


$(document).on("ready", function() {

  function newGame() {
    $plane.addClass('#plane-init');
    $helicopter.addClass('#helicopter-init');
  }

  $('#reset').on('click', function() {
    reset();
  });

  setInterval(movePlane, 30);
  var keys = [];

  $(document).keydown(function(e) {
      keys[e.keyCode] = true;
  });

  $(document).keyup(function(e) {
      delete keys[e.keyCode];
  });

  setInterval(moveHelicopter, 30);
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
              $("#plane").animate({left: "-=10"}, 0, checkForFinishLine);
          }
          if (direction == 38) {
              $("#plane").animate({top: "-=10"}, 0, checkForFinishLine);
          }
          if (direction == 39) {
              $("#plane").animate({left: "+=10"}, 0, checkForFinishLine);
          }
          if (direction == 40) {
              $("#plane").animate({top: "+=10"}, 0, checkForFinishLine);
          }
        }
      }

  function moveHelicopter() {
      for (var direction in keys2) {
          if (!keys2.hasOwnProperty(direction)) continue;

          if (direction == 65) {
              $("#helicopter").animate({left: "-=10"}, 0, checkForFinishLine);
          }
          if (direction == 87) {
              $("#helicopter").animate({top: "-=10"}, 0, checkForFinishLine);
          }
          if (direction == 68) {
              $("#helicopter").animate({left: "+=10"}, 0, checkForFinishLine);
          }
          if (direction == 83) {
              $("#helicopter").animate({top: "+=10"}, 0, checkForFinishLine);
          }
      }
  }

  function getPositions(box) {
    var $box = $(box);
    var pos = $box.position();
    var width = $box.width();
    var height = $box.height();
    return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
  }

  //
  function comparePositions(p1, p2) {
    var x1 = p1[0] < p2[0] ? p1 : p2;
    var x2 = p1[0] < p2[0] ? p2 : p1;
    return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
  }

  //Checks to see if objects are touching one another
  function checkForFinishLine(){
    var finish = $(".finish-line")[0];
    var finishPosistion = getPositions(finish);
    var racerPosition = getPositions(this);
    var horizontalMatch = comparePositions(finishPosistion[0], racerPosition[0]);
    var verticalMatch = comparePositions(finishPosistion[1], racerPosition[1]);
    var match = horizontalMatch && verticalMatch;
    if (match) { gameWon(); }
  }

  function reset() {
    $plane.removeClass('#plane-init');
    $helicopter.removeClass('#helicopter-init');
    window.location.reload();
    // reset the positions
    $plane.addClass('#plane-init');
    $helicopter.addClass('#helicopter-init');
  }

  function gameWon() {
    reset();
    alert(this.name+" Won!");
  }

  newGame();

});
