const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ground= new Ground(300,400,150,30);
}


function draw() {
  background(255,255,255);  
  drawSprites()
  ground.display();
}