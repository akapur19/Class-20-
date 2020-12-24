var fixedRect, movingRect


function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400,200,30,20);
  movingRect = createSprite(400,100,30,20); 

  fixedRect.shapeColor = "green"
  movingRect.shapeColor = "green"
}

function draw() {
  background(255,255,255); 
  
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "blue"; 
    movingRect.shapeColor = "blue"; 
  }
  else{
  fixedRect.shapeColor = "green"
  movingRect.shapeColor = "green"
  }
  drawSprites();
}