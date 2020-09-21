function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(600, 200, 50, 50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "green";
}

function draw() {
  background(210,255,255);  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  if(Math.round(movingRect.x - fixedRect.x) < Math.round(movingRect.width/2+fixedRect.width/2)
  && Math.round(fixedRect.x - movingRect.x) < Math.round(movingRect.width/2+fixedRect.width/2)
  && Math.round(movingRect.y - fixedRect.y) < Math.round(movingRect.height/2+fixedRect.height/2)
  && Math.round(fixedRect.y - movingRect.y) < Math.round(movingRect.height/2+fixedRect.height/2))
  
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  

  console.log("Hello");
  drawSprites();
}