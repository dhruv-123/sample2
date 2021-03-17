var a,b;

function setup() {
  createCanvas(800,400);
 
 a= createSprite(400, 200, 50, 50);
 b=createSprite(300,100,20,20);

 
}

function draw() {
  background("black");  
  drawSprites();

  a.shapeColor="red";
  b.shapeColor="red";
a.x=World.mouseX
a.y=World.mouseY
  console.log(a.y-b.y);

  if(a.x-b.x<a.width/2+b.width/2&&b.y-a.y<a.width/2+b.width/2&&a.y-b.y<a.width/2+b.width/2&&b.x-a.x<a.width/2+b.width/2){
    a.shapeColor="green";
    b.shapeColor="green";
  }
  else{
    a.shapeColor="red";
  b.shapeColor="red";
  }
}