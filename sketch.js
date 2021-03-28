var fixedRec, movingRec;

function setup() {
  createCanvas(800,400);

  fixedRec = createSprite(400, 200, 70, 50);
  fixedRec.shapeColor = "blue";

  movingRec = createSprite(300, 200, 30, 30);
  movingRec.shapeColor = "red";
}

function draw() {
  background("White");

  movingRec.x = World.mouseX;
  movingRec.y = World.mouseY;

  if(movingRec.x - fixedRec.x < fixedRec.width/2 + movingRec.width/2
    && fixedRec.x - movingRec.x < fixedRec.width/2 + movingRec.width/2
    && movingRec.y - fixedRec.y < fixedRec.height/2 + movingRec.height/2
    && fixedRec.y - movingRec.y < fixedRec.height/2 + movingRec.height/2)
  {
    movingRec.shapeColor = "green";
    fixedRec.shapeColor = "black";
  }
  else
  {
    movingRec.shapeColor = "red";
    fixedRec.shapeColor = "blue";
  }
  drawSprites();
}