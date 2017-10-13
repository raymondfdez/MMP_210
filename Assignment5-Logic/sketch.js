function setup() { 
	createCanvas(640, 360);
   
}

function draw() {
	background("black");
    

	strokeWeight(15);
	stroke((206, 190, 187));
    
    /* Lines */ 
	line(width/2, 0, width/2, height);
	line(0, height/2, width, height/2);

	fill(206, 190, 187);
    
    
    /* Bottom left */ 
    if (mouseX > width/2 && mouseY > height/2) {
		rect(width/4, height/2, width, height);
  
    } else if (mouseX < width/2 && mouseY > height/2) {
		rect(0, 0, width/2, height/2);

    } else if (mouseX > width/2 && mouseY < height/2) {
		rect(width/2, 0, width, height/2);
		
    } else {
		rect(0, 0, width/2, height);
        
	}
    
    noStroke();
    fill(221, 224, 132);
    ellipse(mouseX,mouseY,20,20);
    
}