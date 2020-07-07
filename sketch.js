const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=250;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  for(var k = 0;k<=width;k=k+80){
    divisions.push(new division(k, height-divisionHeight/2,10,divisionHeight))
  }


  for(var j = 40;j<=width;j=j+50){
    plinkos.push(new plinko(j,100));
  }

  for(var j = 15;j<=width-10;j=j+50){
    plinkos.push(new plinko(j,200));
  }

  for(var j = 40;j<=width;j=j+50){
    plinkos.push(new plinko(j,300));
  }

  for(var j = 15;j<=width-10;j=j+50){
    plinkos.push(new plinko(j,400));
  }

  for(var j = 40;j<=width;j=j+50){
    plinkos.push(new plinko(j,500));
  }
  
  
  if(frameCount%60===0){
    particles.push(new particle(random(25,460),10))
  }

  ground1=new ground(240,790,480,10)

  console.log(particles[0].body.position);

}

function draw() {
  background("black"); 
  Engine.update(engine);

  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  for(var p=0;p<particles.length;p++){
    particles[p].display();
  }

  ground1.display();

  console.log(frameCount);
  drawSprites();
}