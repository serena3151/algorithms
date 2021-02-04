var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(100,300,80,50)
  rect2 = createSprite(800,300,30,80)
  rect3 = createSprite(600,400,30,60)
  rect4 = createSprite(500,400,20,60)

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  rect1.velocityX = 5;
  rect2.velocityX = -5;

}

function draw() {
  background(0,0,0);  
rect3.x = mouseX;
rect3.y = mouseY;
bounceOff(movingRect,fixedRect);
bounceOff(rect1,rect2);
if(isTouching(rect3,rect4)){
  rect3.shapeColor = "yellow";
  rect4.shapeColor = "yellow";
}
else {
  rect3.shapeColor = "red";
  rect4.shapeColor = "red";
}
  drawSprites();
}