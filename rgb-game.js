var num1 = "";
var num2 = "";
var num3 = "";
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
var color = "rgb(" + r + ", " + g + ", " + b + ")";

$("button").css("border-color", color);
$("button").css("color", color);
$("h1").css("color", color);
$(".form-inline").css("color", color);



$("#submitBtn").on("click", function(){
    pull();
    background();
});

$("input").keypress(function(e) {
    if(e.which == 13) {
        pull();
        background();
    }
});

function background(){
    $("body").css("background-color", "rgb(" + num1 + "," + num2 + "," + num3 + ")")
};

function pull(){
    num1 = $("#num1").val()
    num2 = $("#num2").val()
    num3 = $("#num3").val()
}

function checker(){
    // if()
}
