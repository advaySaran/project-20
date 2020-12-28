var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car.createSprite(50, 200, 50, 50);
  wall.createSprite(1500,200,60,height/2);    
  
  car.velocityX = speed;
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  deformation = 0.5*weight*speed*speed/22500
  if(deformation>180)
  {
  car.shapeColour = colour(250,0,0);
  }
  if(deformation < 180 && deformation > 100)
  {
  car.shapeColour = colour(230,230,0);
  }
  if(deformation < 100)
  {
  car.shapeColour = colour(0,250,0);
  }
  }
}

function draw() {
  background(255,255,255);
  background("black");
  drawSprites();
}