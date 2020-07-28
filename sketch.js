const Engine = Matter.Engine;
const World= Matter.World; 
const Bodies = Matter.Bodies; 
var engine,world;
var object;
var ball ;
function setup() {
  var canvas = createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var ground_options={ 
    isStatic: true
  }
  object=Bodies.rectangle(200,300,200,50,ground_options);
  World.add(world,object);
  var ball_options={
  restitution: 4.0
  }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  

}
 
function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER); 
  rect(object.position.x,object.position.y,200,50);
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);
}