/*------- variables -------*/ 

const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
let startGame = false;
let level = 0;

/*------- listeners -------*/ 

$(document).keydown(function (){ 

    if(!startGame){

        $("#level-title").text("Get Ready!");

        setTimeout(function() {
            nextSequence();
        }, 2000);
        startGame = true;
    } // end if !startGame
}) // end press any key

$(".btn").click(function(event){
    
    animatePress(this.id);
    playSound(this.id);
    
    let userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);

    checkAnswer(userClickedPattern.length-1);
}) // end button.click

/*------- functions -------*/ 

function nextSequence(){

    level++;
    $("#level-title").text("Level " + level);

    userClickedPattern = [];

    var randomNumber = Math.floor(Math.random()*4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    playSound(randomChosenColor);
    animatePress(randomChosenColor);
} // end nextSequence

function playSound(name){

    soundToPlay = new Audio("sounds/" + name + ".mp3");
    soundToPlay.play();
}  // end playSound

function animatePress(currentColor){

    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
    $("#"+currentColor).removeClass("pressed")}, 50);
} // end animatePress

function checkAnswer(userAnswerIndex){

    if(userClickedPattern[userAnswerIndex] === gamePattern[userAnswerIndex]){
        console.log("correct");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function() {
                nextSequence();
            }, 1500)
            }
    } // end if correct
    else{
        console.log("wrong");
        $("#level-title").text("You LOSE!");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over")
        }, 200);
        setTimeout(function(){
            resetGame();
        }, 3500)
    } // end else wrong
} // end checkAnswer

function resetGame(){
    
    $("#level-title").text("Press Any Key to Start");
    level = 0;
    startGame = false;
    gamePattern = [];
} // end resetGame