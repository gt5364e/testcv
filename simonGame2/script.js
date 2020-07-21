
// Array of button colors
var buttonColors = ["red", "blue", "green", "yellow"];

// Array to store the game pattern
var gamePattern = [];

// Array to store the user choosen gamePattern
var userClickedPattern = [];

// Variable to keep track of what level
var level = 0;

// Selects random color from buttonColors array.  Adds it to end of gamePattern array.
function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  gamePattern.push(buttonColors[randomNumber]);
  $("#" + buttonColors[randomNumber]).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);

  //erase the user's answers
  userClickedPattern = [];

  //advance the level and display this in the h1
  level++;
  $("#level-title").text("Level " + level);
};


// Animate all buttons in the new nextSequence
function animateSequence() {
      for (var i = 0; i < gamePattern.length; i++) {
        setTimeout(function() {
          // playSound(gamePattern[i]);
          var colorSound = new Audio("sounds/" + gamePattern[i] + ".mp3");
          colorSound.play();
          $("#" + gamePattern[i]).fadeOut(100).fadeIn(100);
        }, 200);
      }
}

$(".btn").click(function(evt){
  // console.log($(this).attr("id"));
  userClickedPattern.push($(this).attr("id"));
  var colorSound = new Audio("sounds/" + $(this).attr("id") + ".mp3");
  colorSound.play();
  //cause button to animatePress
  animatePress($(this).attr("id"));
  checkAnswer();
});

// Animate buttons when user clicks
function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  //use set setTimeout to remove pressed class giving a flashing appearance
  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  });
}



// Check the current click is correct in the user sequence
function checkAnswer(){
  var lastClickIndex = userClickedPattern.length;
  lastClickIndex -- ;
  if(gamePattern[lastClickIndex] == userClickedPattern[lastClickIndex]){
    console.log("correct");

    // if the user clicked pattern is equal in length to the game pattern advance to next Level
    if(gamePattern.length == userClickedPattern.length){
      nextSequence();
    }
  }
  else{
    var endGameSound = new Audio("sounds/wrong.mp3");
    endGameSound.play();
    $("#level-title").html("GAME OVER. <br> Press Any Key to RESTART")
      // remember the .html method will include HTML tag <br> which generates a newline
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 1000);

    startOver();
  }
}



// // Start the game with a keypress listener
// $(document).keypress(function(){
//   nextSequence();
// });

// Start the game by clicking start
$("#startButton").click(function(){
  nextSequence();
  $("#startButton").fadeOut(200);
})

// Reset variables to start the game OVER
function startOver(){
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
}
