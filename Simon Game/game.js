const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
let keepPlaying = true;
let level = 0;

$("document").keydown(function(event) {
    
});

function play() {
    alert("Play the Game!");
}  // end play

function nextSequence(gamePattern, buttonColors){

    var randomNumber = Math.floor(Math.random())*4;

    let randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    animatePress(randomChosenColor);
    playSound(randomChosenColor);

    level++;

    $("h1").text("Level " + level);

}  // end nextSequence

$(".btn").click(function(event){
    
    animatePress(this.id);
    playSound(this.getAttribute("id"))
    
    let userChosenColor = this.getAttribute("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);

})  // end button.click

function playSound(name){
    soundToPlay = new Audio("sounds/" + name + ".mp3");
    soundToPlay.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed")}, 50)
    }// end animatePress