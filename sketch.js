var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2,
}
ball = Bodies.circle(100, 100, 25, ball_options)
World.add(world, ball)


groundObj=new ground(width/2,670,width,20);
leftSide = new ground(1100, 600, 20, 120);
rightSide = new ground(1500, 600, 20, 120)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 25, 25)


  groundObj.display();
leftSide.display();
rightSide.display();

  drawSprites();
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Body.applyForce(ball, {x:0, y:0}, {x:150, y:-150})
}
}