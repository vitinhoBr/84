canvas=
document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=1;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();