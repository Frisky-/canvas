var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

ctx.strokeStyle = "red";
ctx.lineWidth = 2;

ctx.beginPath();
ctx.moveTo(50, 50);

ctx.bezierCurveTo(50, 400, 400, 400, 400, 50);
ctx.lineTo(50, 50);
ctx.fillStyle = "green";
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(120, 80);
ctx.quadraticCurveTo(0, 300, 500, 50);



ctx.stroke();
