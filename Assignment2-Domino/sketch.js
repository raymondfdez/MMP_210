function setup() {
	createCanvas(720, 580);
}
function draw() {
    var black = color(0,0,0);
    var gold = color(237,198,26);
    var purple = color(110,72,186);
    var white = color(255,255,255);
    var crema = color(238,242,205);
    
	background(black);
    
    
	
	noStroke();
	fill(crema);
	rect(100, 175, 200, 400);
	
	
	stroke("black");
    strokeWeight(20);
	line(100,370,300,370 );
}