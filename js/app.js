// define globals
var $plane = $("#plane");
var $helicopter = $("#helicopter");
$plane.name = "Player 1";
$helicopter.name = "Player 2";
planeScore = 0;
helicopterScore = 0;

$(document).on("ready", function() {

  function newGame() {
    $plane.addClass('#plane-init');
    $helicopter.addClass('#helicopter-init');
    $("#plane-score").text("Plane: "+planeScore);
    $("#helicopter-score").text("Helicopter: "+helicopterScore);
  }

  $('#reset').on('click', function() {
    reset();
  });

  // player key selection map
  var keys = {};

  // key event handlers
  $(document).keydown(function(e) {
      keys[e.keyCode] = true;
  });
  $(document).keyup(function(e) {
      delete keys[e.keyCode];
  });
  // for smooth animation using setInterval
  setInterval(movePlane, 30);
  setInterval(moveHelicopter, 30);

  function movePlane() {
      movePlayer('#plane', keys);
  }
  function moveHelicopter() {
      movePlayer('#helicopter', keys);
  }
  function movePlayer() {
      for (var direction in keys) {
          if (!keys.hasOwnProperty(direction)) continue;

          // plane
          if (direction == 37) {
              $('#plane').animate({left: "-=5"}, 0, checkForFinishLine);
          }
          if (direction == 38) {
              $('#plane').animate({top: "-=5"}, 0, checkForFinishLine);
          }
          if (direction == 39) {
              $('#plane').animate({left: "+=5"}, 0, checkForFinishLine);
          }
          if (direction == 40) {
              $('#plane').animate({top: "+=5"}, 0, checkForFinishLine);
          }

          // helicopter
          if (direction == 65) {
              $("#helicopter").animate({left: "-=5"}, 0, checkForFinishLine);
          }
          if (direction == 87) {
              $("#helicopter").animate({top: "-=5"}, 0, checkForFinishLine);
          }
          if (direction == 68) {
              $("#helicopter").animate({left: "+=5"}, 0, checkForFinishLine);
          }
          if (direction == 83) {
              $("#helicopter").animate({top: "+=5"}, 0, checkForFinishLine);
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
  // reset the positions
  $plane.addClass('#plane-init');
  $helicopter.addClass('#helicopter-init');
  window.location.reload();
}

function planeWon() {
  bootbox.confirm("Plane Won!", function() {
    reset();
    planeScore += 1;
});

}
function helicopterWon() {
  bootbox.confirm("Helicopter Won!", function() {
    reset();
    helicopterScore += 1;
});
}

//modal event handlers
$("#myModal").on("show", function() {    // wire up the OK button to dismiss the modal when shown
    $("#myModal .btn").on("click", function(e) {
        // just as an example...
        $("#myModal").modal('hide');
        reset();// dismiss the dialog
    });
});
$("#myModal").on("hide", function() {    // remove the event listeners when the dialog is dismissed
    $("#myModal a.btn").off("click");
});

$("#myModal").on("hidden", function() {  // remove the actual elements from the DOM when fully hidden
    $("#myModal").remove();
});
