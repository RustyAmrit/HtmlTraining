var userClickedPattern = [];
var gamePattern = [];
const buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

function nextSequence(){
    userClickedPattern = [];
    var randomNumber = (Math.floor(Math.random() * 4));
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    level++;
    $("#level-title").text("Level " + level);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

$(".btn").click(function(event){
    var userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
});

function playSound(name){
    var sound = new Audio("./sounds/" + name + ".mp3");
    sound.play();
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");

    setTimeout(function (){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
        setTimeout(function (){
            nextSequence();
        }, 1000);
    }
    }
    else{
        $("body").addClass("game-over");
        playSound("wrong");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();

        setTimeout(function (){
            $("body").removeClass("game-over");
        }, 200);
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}