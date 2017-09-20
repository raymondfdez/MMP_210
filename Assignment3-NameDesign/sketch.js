function setup() {
    
	createCanvas(640, 480);
    background(255,255,255);

   
}
function draw() {
    
    /* TEXT VARIABLES */
    var name = "RAYM   ND";
    var middlename = "MICHAEL";
    var lastname = "FERNANDEZ";
    
    /* MEASURE VARIABLES */
    var nameSize = 120;
    var NamesColor = color(255,255,255);
    var nameWidth = 20;
    var nameHeight = 125;
    var lastnameSize = 100;
    var lastnameWidth = 10;
    var lastnameHeight = 440;

    /* COLOR VARIABLES */
    var rectsColor = color(0,0,0);
    var shapesColor = color(242,143,38);
    var middlenameColor = color(0,0,0);
    var topTriangleColor = color(91,107,198);
    var middleTriangleColor = color(255,0,46);
    var topCircleColor = color(50,201,100);
    var middleRectColor = color(242,210,33);
    
    /* TOP RECTANGLE */
    fill(rectsColor);
    rect(0,0,width,height/3);
    
    /* NAME */ 
    textSize(nameSize);
    fill(NamesColor);
    text(name,nameWidth,nameHeight);
    
    /* MIDDLENAME */ 
    textSize(nameSize);
    fill(middlenameColor);
    text(middlename,50,280);
    
    /* BOTTOM RECTANGLE */
    fill(rectsColor);
    rect(0,325,width,height/3);
    
    /* LASTNAME */
    textSize(lastnameSize);
    fill(NamesColor);
    text(lastname,lastnameWidth,lastnameHeight);

    /* SHAPES */ 
    
    /* TOP CIRCLE */
    fill(topCircleColor);
    ellipse(410,80,90,90);
    
    /* TOP TRIANGLE */ 
    fill(topTriangleColor);
    triangle(160,90,145,48,132,90);
    
    /* MIDDLE RECTANGLE */ 
    noStroke();
    fill(middleRectColor);
    rect(160,193,15,88);
    
    /* MIDDLE TRIANGLE */ 
    fill(middleTriangleColor);
    noStroke();
    triangle(380,245,395,208,410,245);
    
    /* BOTTOM TRIANGLE */
    fill(topTriangleColor);
    triangle(303,410,315,375,328,410);
    
}