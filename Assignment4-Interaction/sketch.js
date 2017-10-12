
var r = random(255);
var g = random(255);
var b = random(255);

function setup() {
    
	createCanvas(640, 480);
   
   
}

function draw() {
    
    /* Colors */ 
    var strokeColor = 255;
    
    /* background multi color */ 
     background(r,g,b);
    
  
	strokeWeight(mouseX/50, mouseY/50);
	stroke(strokeColor);
	
    
    fill(mouseX, mouseY,0); 

	line(mouseX, mouseY, width, height);
	ellipse(mouseX, mouseY, 40, 40);
    
    line(mouseX, mouseY, 0, height);
	ellipse(mouseX, mouseY, 40, 40);
    
    line(mouseX, mouseY, 0, 0);
	ellipse(mouseX, mouseY, 40, 40);
    
    line(mouseX, mouseY, width, 0);
	ellipse(mouseX, mouseY, 40, 40);
    
    line(mouseX, mouseY, pmouseX, pmouseY);
    
    
}