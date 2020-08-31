
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper	
var dustbin, ground
var dustbin1, dustbin2


function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(200,520,20,20);
   

  Engine.run(engine);
  
  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
  this.width=width
  World.add(world, ground);

  dustbin1 = Bodies.rectangle(470, 630, 20, 30 , {isStatic:true} );
  this.width=width
  World.add(world, dustbin1);

  dustbin2 = Bodies.rectangle(500, 640, 69, 30 , {isStatic:true} );
  this.width=width
  World.add(world, dustbin2);

  dustbin = Bodies.rectangle(538, 630, 20, 30 , {isStatic:true} );
  this.width=width
  World.add(world, dustbin);
  
}


  

function draw() {
 
  background(0);

  dustbin.shapeColor=color("blue");
  dustbin1.shapeColor=color("blue");
  dustbin2.shapeColor=color("blue");
  




  paper.display();
  
  

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,this.width,20);

  rectMode(CENTER);
  rect(dustbin1.position.x,dustbin1.position.y,20, 30);

  rectMode(CENTER);
  rect(dustbin2.position.x,dustbin2.position.y,49, 10);

  rectMode(CENTER);
  rect(dustbin.position.x,dustbin.position.y,20,30);

  
  drawSprites();

  
 
}
function keyPressed(){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:13,y:-13});
}
}
