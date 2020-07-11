var wall, bullet;
var bSpeed, bWeight, wThickness;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200, 200, 50, 200);
  wall.shapeColor = "blue";

wThickness = random(22,83);

bullet = createSprite(00, 200, 70, 10);
//bullet.velocityX = 5;
bullet.shapeColor = color(255,255,0);


  bSpeed = random(223,321);
  bWeight = random(30,52);
}

function draw() {

background("black");

  bullet.velocityX = bSpeed;

  //moveObj.collide(statObj);

  wall.width = wThickness;

damage(bullet,wall);
  drawSprites();
}

function damage (moveObj,statObj) {
  if(statObj.x-moveObj.x < statObj.width/2 + moveObj.width/2 &&
    moveObj.x-statObj.x < statObj.width/2 + moveObj.width/2) {

      moveObj.velocityX = 0;

    var deform = (0.5 * bWeight * bSpeed * bSpeed) / (wThickness * wThickness * wThickness);

    console.log(deform);

  if(deform < 4) {
    statObj.shapeColor = "green";
  }
  
  if(deform > 4 && deform < 10) {
  statObj.shapeColor = "red";
  }
  
  if(deform > 10) {
    statObj.visible = false;
  }
  }
}
