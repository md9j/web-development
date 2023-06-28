$("h1").css("color", "red");

//$("a").attr("href", "https://www.yahoo.com")

$("h1").click(function() {
    
    $("h1").css("color", "purple");

    setTimeout(function () {$("h1").css("color", "green")}, 2000)
})  // end h1.click

$("button").click(function(){
    $("h1").css("color", "orange");
    //  $("h1").fadeToggle();
    $("h1").slideToggle();
})  // end button.click

$("input").keydown(function(event){
    console.log(event.key);
    // $("h1").text(event.key);
})