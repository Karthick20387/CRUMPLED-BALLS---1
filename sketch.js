
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3;
var ground;
var paper1;

function setup() {
	createCanvas(1550,735);

	engine = Engine.create();
	world = engine.world;

	ground=Bodies.rectangle(width/2,735,width,10,{isStatic:true})
	World.add(world,ground)

	bin1 = new Bin(1200,650,15,100)
	bin2 = new Bin(1400,650,15,100)
	bin3 = new Bin(1300,700,213,15)
	paper1 = new Paper(100,600,25)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  fill("green")
  stroke("blue")
  strokeWeight(2)
  textSize(30)
  text("CRUMPLED BALL",600,100)
  drawSprites();
  bin1.display();
  bin2.display();
  bin3.display();
  paper1.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW ) {
	  Matter.Body.applyForce(paper1.paper, paper1.paper.position, {x: 120,y: -145});
	}
  }


