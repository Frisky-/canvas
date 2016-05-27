var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.moveTo(80, 50);


//top right
ctx.arcTo(200, 50, 200, 80, 20);

//bottom right
ctx.arcTo(200, 180, 160, 180, 20);

//bottom left
ctx.arcTo(60, 180, 60, 160, 20);

//top left
ctx.arcTo(60, 50, 80, 50, 20);
ctx.lineWidth = 4;
ctx.strokeStyle = "red";
ctx.stroke();
ctx.fillStyle = "green";
ctx.fill();
