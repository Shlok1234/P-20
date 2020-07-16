var car,wall,speed,weight
var deformation;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed = random(55,90);
  weight = random(400,1500);

  deformation = (0.5*speed*speed*weight/22500);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background(255,255,255);

  car.velocityX = speed;

  if(car.collide(wall)){
    if(deformation < 100){
      car.shapeColor = (0,255,0);
    }
    else if(deformation > 180 && deformation < 360){
      car.shapeColor = (230, 230, 0);
    }
    else if(deformation > 180){
      car.shapeColor = (255,0,0);
    }
  }

  drawSprites();
}