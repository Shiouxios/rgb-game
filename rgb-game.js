// define variables

var num1 = "";
var num2 = "";
var num3 = "";
var r = "";
var g = "";
var b = "";
var color = "";

// setup

reset();

// add listeners to buttons

$("#submitBtn").on("click", function(){
    pull();
    background();
});

$("input").keypress(function(e) {
    if(e.which == 13) {
        pull();
        background();
    };
});

$("#giveUpBtn").on("click", function(){
    $("#num1").val(r);
    $("#num2").val(g);
    $("#num3").val(b);
});

$("#resetBtn").on("click", function(){
    reset();
    $("body").css("background-color", "white");
});

// functions

function reset(){
    $("#num1").val("");
    $("#num2").val("");
    $("#num3").val("");
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    color = "rgb(" + r + ", " + g + ", " + b + ")";
    $("button").css("border-color", color);
    $("button").css("color", color);
    $("h1").css("color", color);
    $(".form-inline").css("color", color);
};

function background(){
    $("body").css("background-color", "rgb(" + num1 + "," + num2 + "," + num3 + ")")
};

function pull(){
    num1 = $("#num1").val()
    num2 = $("#num2").val()
    num3 = $("#num3").val()
};