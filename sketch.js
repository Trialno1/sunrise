var groundHeight;
var mountain1;
var mountain2;

var tree;

var moon;
var sun;
var darkness;

var yPos_sun;
var brightness;

var clouds;
var stars;
var yPos_birds;
var xPos_birds;

function setup()
{
	createCanvas(800, 600);
	//set the groundHeight proportional to the canvas size
	groundHeight = (height / 3) * 2;

	//initalise the mountain objects with properties to help draw them to the canvas
	mountain1 = {
		x: 400,
		y: groundHeight,
		height: 320,
		width: 230
	};
	mountain2 = {
		x: 550,
		y: groundHeight,
		height: 200,
		width: 130
	};

	//initalise the tree object
	tree = {
		x: 150,
		y: groundHeight + 20,
		trunkWidth: 40,
		trunkHeight: 150,
		canopyWidth: 120,
		canopyHeight: 100
	};

    //initalise the sun 
	sun = {
		x: 150,
		y: 70,
		diameter: 80,
	};
    
    //TASK: intialise a moon object with an extra property for brightness
    moon = {
        x: 650,
        y: 40,
        diameter: 80,
    };


	//set the initial darkness
	darkness = 0;
    
    //sun position
    yPos_sun= 70;
    
    //moon and clouds brightness
    brightness= 0;
    
    //initialize the clouds
    clouds = {
        x: 350,
        y: 100,
        
    };
    
    //initialize stars
    stars= {
        x1: 420,
        y1: 70,
        x2: 420,
        y2: 80,
        x3: 415,
        y3: 75,
        x4: 425,
        y4: 75,
        x5: 450,
        y5: 90,
        x6: 450,
        y6: 100,
        x7: 445,
        y7: 95,
        x8: 455,
        y8: 95,
        x9: 400,
        y9: 100,
        x10: 400,
        y10: 110,
        x11: 395,
        y11: 105,
        x12: 405,
        y12: 105,
        brightness: 0
    };
    
    //initiallize birds
    yPos_birds= 130;
    xPos_birds= 300;
        
}

function draw()
{
	//TASK: update the values for the moons brightness, the sun's position and the darkness.
	//You can either map this to the mouse's location (i.e. the futher left the mouse is the more daylight) or you can just change the values gradually over time.


	//draw the sky
	background(150, 200, 255);
	noStroke();

	//draw the sun
	fill(255, 255, 0);
	ellipse(sun.x, yPos_sun, sun.diameter);
    yPos_sun = yPos_sun + 3;
    
    
    //TASK: you'll need to draw the moon too. Make sure you use brightness to adjust the colour
    fill(255,255,255,brightness);
    brightness = brightness + 1;
    ellipse(moon.x,moon.y, moon.diameter);

	//draw the ground and make it green
	fill(70, 200, 0);
	rect(0, groundHeight, width, height - groundHeight);

	//draw the mountains
	fill(120);
	triangle(mountain1.x, mountain1.y,
		mountain1.x + mountain1.width, mountain1.y,
		mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);

	triangle(mountain2.x, mountain2.y,
		mountain2.x + mountain2.width, mountain2.y,
		mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);
    
    //TASK: You can draw the tree yourself
    fill(139,69,19);
    rect(tree.x,
         tree.y - tree.trunkHeight,
         tree.trunkWidth,
         tree.trunkHeight);
    fill(0,128,0);
    ellipse(tree.x + tree.trunkWidth/2,
            tree.y - tree.trunkHeight - tree.canopyHeight/2 +30,
            tree.canopyWidth,
            tree.canopyHeight);
    
    //draw clouds
    fill(255,255,255,brightness);
    brightness = brightness + 5;
    ellipse(clouds.x,clouds.y,45,45);
    ellipse(clouds.x-25,clouds.y,25,25);
    ellipse(clouds.x+25,clouds.y,25,25);
    
    //draw stars
    stroke(218,165,32,stars.brightness);
    stars.brightness = stars.brightness + 1;
    line(stars.x1,stars.y1,stars.x2,stars.y2);
    line(stars.x3,stars.y3,stars.x4,stars.y4);
    line(stars.x5,stars.y5,stars.x6,stars.y6);
    line(stars.x7,stars.y7,stars.x8,stars.y8);
    line(stars.x9,stars.y9,stars.x10,stars.y10);
    line(stars.x11,stars.y11,stars.x12,stars.y12);
    
    //Birds
    noStroke();
    fill(0);
    xPos_birds = xPos_birds - 3
    ellipse(xPos_birds,yPos_birds,25,25);
    ellipse(xPos_birds + 20,yPos_birds,25,25);
    fill(150,200,255);
    ellipse(xPos_birds,yPos_birds + 5,25,25);
    ellipse(xPos_birds + 20,yPos_birds + 5,25,25);

    fill(0,0,0,);
    ellipse(xPos_birds + 50,yPos_birds + 50,25,25);
    ellipse(xPos_birds + 70,yPos_birds + 50,25,25);
    fill(150,200,255);
    ellipse(xPos_birds + 50,yPos_birds + 55,25,25);
    ellipse(xPos_birds + 70,yPos_birds + 55,25,25);

	//TASK: make the scene dark by drawing a rectangle that covers the whole canvas.
	//Use the alpha value of fill to determine how dark to make it
    darkness = min(darkness + 1,200);
    darkness = darkness + 0.1;
    fill(0,0,0,darkness);
    rect(0,0,width,height);
    
    
}