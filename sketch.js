var a,b 

function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 80, 50);
  a.shapeColor="blue"
  b=createSprite(200,200,50,80)
  b.shapeColor="red"
  
}
function draw() {
  background(0);  
a.x=World.mouseX
a.y=World.mouseY
console.log(a.x-b.x)

if(a.x-b.x<b.width/2+a.width/2
  
  && b.x-a.x<b.width/2+a.width/2

  && a.y-b.y<b.height/2+a.height/2

  && b.y-a.y<b.height/2+a.height/2
  
  ){
  a.shapeColor="red"
  b.shapeColor="blue"
}
else{
  a.shapeColor="purple"
  b.shapeColor="pink"
}

  drawSprites();
}