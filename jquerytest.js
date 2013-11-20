var paper;
var s;

$("document").ready( function (){ 
	paper = Raphael(0, 0, 0, 0);
	s = Snap(1000, 500);
	var bigCircle = s.circle(150, 150, 100);
	resizeWindow();
	drawStaff();
	addNote();
});

function addNote(){
	// Creates circle at x = 50, y = 40, with radius 10
	var circle = paper.circle(50, 40, 10);
	// Sets the fill attribute of the circle to red (#f00)
	circle.attr("fill", "#000");
	// Sets the stroke attribute of the circle to white
	circle.attr("stroke", "#000");
}

function drawStaff(){
	for(var i = 0; i<5; i++){
		rect = paper.rect(10,24*i+100,$(window).width()-20,1).attr({fill: "#000000"});
	}
}

//a function to set the size of the canvas to the window size
function resizeWindow(){
	paper.setSize($(window).width(),300);
	paper.canvas.style.backgroundColor = "#fdf3ea";
	var offset = $(window).height()/2 - paper.canvas.height.baseVal.value/2;
	console.log(offset);
	paper.canvas.style.top = offset.toString()+"px";
	
}