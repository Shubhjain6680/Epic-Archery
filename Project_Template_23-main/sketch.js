const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

function preload(){
  base1image=loadImage("assets/base1.png");
  base2image=loadImage("assets/base2.png");
  player1=loadImage("assets/player.png");
  player2=loadImage("assets/player.png")
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object


 }

function draw() {

  background(180);
imageMode(CENTER);
 image(base1image,200,400,100,100);
 image(base2image,1000,400,100,100);
 image(player1,200,320,50,100);
 image(player2,1000,320,50,100);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 


   //display Player and computerplayer


}
