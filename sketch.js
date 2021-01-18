var k, r,m;

function setup() {
  createCanvas(800,400);
  m= createSprite(400, 200, 50, 50);
  k= createSprite(200,200,40,40);
  r= createSprite(300,300,40,40);
  r.shapeColor="blue";
  k.shapeColor="black";
  m.shapeColor="yellow";
}

function draw() {
  background(255,255,255);
  k.x=World.mouseX; 
  k.y=World.mouseY;

 console.log(k.x-r.x);

if(k.x-r.x<k.width/2+r.width/2 &&
   r.x-k.x<k.width/2+r.width/2 &&
    k.y-r.y<k.width/2+r.width/2 &&
    r.y-k.y<k.width/2+r.width/2){
  r.shapeColor="red";
  k.shapeColor="red";
}
else if(k.x-m.x<k.width/2+m.width/2 &&
        m.x-k.x<k.width/2+m.width/2 &&
        k.y-m.y<k.width/2+m.width/2 &&
        m.y-k.y<k.width/2+m.width/2){
  m.shapeColor="red";
  k.shapeColor="red";
}
else{
  r.shapeColor="blue";
  k.shapeColor="black";
  m.shapeColor="yellow";
}

  drawSprites();
}