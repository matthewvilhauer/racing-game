// define globals
var $plane = $("#plane");
var $helicopter = $("#helicopter");
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

  setInterval(movePlane, 20);
  var keys = [];

  $(document).keydown(function(e) {
      keys[e.keyCode] = true;
  });

  $(document).keyup(function(e) {
      delete keys[e.keyCode];
  });

  setInterval(moveHelicopter, 20);
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
          $("#plane2").animate({left: "-=10"}, 0, checkForFinishLine);
      }
      if (direction == 87) {
          $("#plane2").animate({top: "-=10"}, 0, checkForFinishLine);
      }
      if (direction == 68) {
          $("#plane2").animate({left: "+=10"}, 0, checkForFinishLine);
      }
      if (direction == 83) {
          $("#plane2").animate({top: "+=10"}, 0, checkForFinishLine);
      }
    }
  }

  newGame();

});

function getPositions(box) {
  var $box = $(box);
  var pos = $box.position();
  var width = $box.width();
  var height = $box.height();
  var boxHorizontalCoordinates = [ pos.left, pos.left + width ];
  var boxVerticalCoordinates = [ pos.top, pos.top + height ];
  return [ boxHorizontalCoordinates, boxVerticalCoordinates ];
}

//
function comparePositions(p1, p2) {
  var x1 = p1[0] < p2[0]? p1 : p2;
  var x2 = p1[0] < p2[0] ? p2 : p1;
  return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
}

//Checks to see if objects are touching one another
function checkForFinishLine(){
  var finish = $(".finish-line")[0];
  var finishPosition = getPositions(finish);
  var planePosition = getPositions($("#plane"));
  var helicopterPosition = getPositions($("#helicopter"));
  var horizontalPlaneMatch = comparePositions(finishPosition[0], planePosition[0]);
  var horizontalHelicopterMatch = comparePositions(finishPosition[0], helicopterPosition[0]);
  var verticalPlaneMatch = comparePositions(finishPosition[1], planePosition[1]);
  var verticalHelicopterMatch = comparePositions(finishPosition[1], helicopterPosition[1]);
  var planeMatch = horizontalPlaneMatch && verticalPlaneMatch;
  var helicopterMatch = horizontalHelicopterMatch && verticalHelicopterMatch;
  if (planeMatch) { planeWon(); }
  else if (helicopterMatch) { helicopterWon(); }
}

function reset() {
  $plane.removeClass('#plane-init');
  $helicopter.removeClass('#helicopter-init');
  window.location.reload();
  // reset the positions
  $plane.addClass('#plane-init');
  $helicopter.addClass('#helicopter-init');
}

function planeWon() {
  reset();
  alert("Plane Won!");
}
function helicopterWon() {
  reset();
  alert("Helicopter Won!");
}
