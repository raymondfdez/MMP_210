function setup() {
	createCanvas(720, 580);
   
}
function draw() {
  
    
    /* COLOR VARIBLES */
    var black = color(0,0,0);
    var gold = color(237,198,26);
    var purple = color(110,72,186);
    var white = color(255,255,255);
    var crema = color(238,242,205);
    var blue = color(116,197,224);
    var silver = color(124,149,158);
    var lightPurple = color(243,227,247);
    var red = color(237,39,21);
    var lightBlue = color(59,205,219);
    var lightBlueMiddle = color(181,246,252);
    var lightGold = color(247,222,153);
    var green = color(63,163,93);
    var lightGreen = color(141,232,168);
    var lightRed = color(255,193,193);
    var orange = color(255,132,25);
    var lightOrange = color(255,199,150);
    
    /* TEXT VARIABLES */ 
     var welcome ="Let's Play Dominoes!"
    
    /* BACKGROUND */ 
	background(blue);
    
    /* TEXT */ 
    fill(black);
    stroke(white);
    textSize(70);
    textStyle(ITALIC);
    text(welcome,40,100);
    
    
        

    /* *** DOMINO 3 *** */
    stroke(black);
    strokeWeight(5);
	fill(crema);
	rect(400, 220, 200, 400, 10);
    
    /* MIDDLE LINE 3 */ 
    stroke("black");
    strokeWeight(7);
	line(598,425,260,425 );
    
    /* Middle screw 3*/
    noStroke(); 
    fill(silver);
    ellipse(500,425,12,12);
    fill(white);
    ellipse(500,425,6,6);
    
    /* ****DOMINO 3 DOTS**** */
    
    /* DOMINO 3 TOP DOTS */
    
    /* LEFT TOP DOT */ 
    fill(red);
    ellipse(450,275,38,38);
    fill(lightRed);
    ellipse(450,275,16,16);
    
    /* LEFT BOTTOM DOT */ 
    fill(red);
    ellipse(450,375,38,38);
    fill(lightRed);
    ellipse(450,375,16,16);
    
    /* RIGHT TOP DOT */
    fill(red);
    ellipse(550,275,38,38);
    fill(lightRed);
    ellipse(550,275,16,16);
    
    /* RIGHT BOTTOM DOT */
    fill(red);
    ellipse(550,375,38,38);
    fill(lightRed);
    ellipse(550,375,16,16);
    
    
    /* ***** DOMINO 3 BOTTOM DOTS **** */
    
    /* TOP LEFT BOTTOM */ 
    fill(orange);
    ellipse(450,470,38,38);
    fill(lightOrange);
    ellipse(450,470,16,16);
    
    /* RIGHT BOTTOM DOT */
    fill(orange);
    ellipse(550,550,38,38);
    fill(lightOrange);
    ellipse(550,550,16,16)
    
    
    /* ****DOMINO 2**** */
    stroke(black);
    strokeWeight(5);
	fill(crema);
	rect(250, 190, 200, 400, 10);

    
    /* MIDDLE LINE 2 */ 
    stroke("black");
    strokeWeight(7);
	line(449,400,250,400 );
    
    /* Middle screw 2*/
    noStroke(); 
    fill(silver);
    ellipse(350,400,12,12);
    fill(white);
    ellipse(350,400,6,6);
    
    /* **** DOMINO 2 DOTS **** */
    
    /* ****TOP PART DOMINO 2 DOTS**** */
    fill(gold);
    ellipse(350,300,38,38);
    fill(lightGold);
    ellipse(350,300,18,18);
    
    /* ****BOTTOM PART DOMINO 2 DOTS**** */
    /* TOP DOT */
    fill(green);
    ellipse(300,450,38,38);
    fill(lightGreen);
    ellipse(300,450,18,18);
    
    /* MIDDLE DOT */
    fill(green);
    ellipse(350,520,38,38);
    fill(lightGreen);
    ellipse(350,520,18,18);
    
    /* BOTTOM DOT */ 
    fill(green);
    ellipse(410,570,38,38);
    fill(lightGreen);
    ellipse(410,570,18,18);
    
    
    
	/* DOMINO 1 DOTS */ 
	stroke(black);
    strokeWeight(5);
	fill(crema);
	rect(100, 175, 200, 400, 10);
	
    /* MIDDLE LINE */ 
    stroke("black");
    strokeWeight(7);
	line(101,370,296,370 );
    
    
    /* Middle screw 1 */
    noStroke(); 
    fill(silver);
    ellipse(200,370,12,12);
    fill(white);
    ellipse(200,370,6,6);

    /* ****TOP 6 **** */
    
    /* ****LEFT SIDE DOTS**** */ 
    
    /* TOP LEFT CORNER DOT */ 
    fill(purple);
    ellipse(138,220,38,38);
    fill(lightPurple);
    ellipse(138,220,18,18);
    
    /* MIDDLE LEFT SIDE DO */ 
    fill(purple);
    ellipse(138,275,38,38);
    fill(lightPurple);
    ellipse(138,275,18,18);
    
    /* BOTTOM LEFT SIDE DOT */ 
    fill(purple);
    ellipse(138,330,38,38)
     fill(lightPurple);
    ellipse(138,330,18,18);
    
    /* *****MIDDLE SIDE DOTS**** */
    
    /*TOP MIDDLE DOT */ 
    fill(purple);
    ellipse(195,220,38,38);
    fill(lightPurple);
    ellipse(195,220,18,18);
    
    /* MIDDLE MIDDLE DOT */ 
    fill(purple);
    ellipse(195,275,38,38);
    fill(lightPurple);
    ellipse(195,275,18,18);
    
    /* BOTTOM MIDDLE DOT */
    fill(purple);
    ellipse(195,330,38,38);
    fill(lightPurple);
    ellipse(195,330,18,18);
    
    /* ****RIGHT SIDE DOTS**** */
    
    /* TOP RIGHT SIDE DOT */ 
    fill(purple);
    ellipse(255,220,38,38);
    fill(lightPurple);
    ellipse(255,220,18,18);
    
    /* MIDDLE RIGHT SIDE DOT */
    fill(purple);
    ellipse(255,275,38,38);
    fill(lightPurple);
    ellipse(255,275,18,18);
    
    /* BOTTOM RIGHT SIDE DOT */
    fill(purple);
    ellipse(255,330,38,38);
    fill(lightPurple);
    ellipse(255,330,18,18);
    
    /* **** BOTTOM 5 **** */ 
    
    /* **** LEFT SIDE DOTS **** */
    
    /* TOP LEFT SIDE DOT */
    fill(lightBlue);
    ellipse(138,420,38,38);
    fill(lightBlueMiddle);
    ellipse(138,420,18,18);
    
    /* BOTTOM LEFT SIDE DOT */
      fill(lightBlue);
    ellipse(138,530,38,38);
    fill(lightBlueMiddle);
    ellipse(138,530,18,18);
    
    /* ****MIDDLE DOT**** */ 
    fill(lightBlue);
    ellipse(200,475,38,38);
    fill(lightBlueMiddle);
    ellipse(200,475,18,18);
    
    /* ****RIGHT SIDE DOTS**** */
    
    /* TOP RIGHT SIDE DOT */ 
    fill(lightBlue);
    ellipse(255,420,38,38);
    fill(lightBlueMiddle);
    ellipse(255,420,18,18);
    
    /* BOTTOM RIGHT SIDE DOT */
    fill(lightBlue);
    ellipse(255,530,38,38);
    fill(lightBlueMiddle);
    ellipse(255,530,18,18); 
}