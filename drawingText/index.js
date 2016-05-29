var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var text = "Hello world!";
ctx.font = "40pt Arial";

// ctx.fillStyle = "yellow";
// ctx.fillText(text, 50, 50);
//
// ctx.strokeStyle = "black";
// ctx.strokeText(text, 50, 50);

ctx.font = "30pt Arial";
ctx.fillText("Regular Text", 50, 80);

ctx.translate(400, 300);
ctx.rotate(0.5 * Math.PI);

var rText = "Rotate text";
ctx.fillText(rText, 50, 250);
