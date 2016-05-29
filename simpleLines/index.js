var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "red";
ctx.lineWidth = 10;
ctx.beginPath();

ctx.moveTo(150, 20);

ctx.lineTo(75, 200);

ctx.lineTo(225, 200);

ctx.lineTo(150, 20);

ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();

ctx.stroke();
