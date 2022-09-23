const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground1;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  ground1 = new Ground(200,390,400,30);
  ground2 = new Ground(0,200,40,400);


  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground1.show();
  ground2.show();
}

