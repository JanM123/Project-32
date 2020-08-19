const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg; 
var defaultBg;
var base1, base2;
var ground;
var side1, side2;
var polygon;
var slingshot;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25, block26, block27, block28;
var block29, block30, block31, block32, block33, block34, block35, block36, block37, block38;
var gameState;
var score = 0;

function preload() {

  backgroundImg = loadImage("Images/White.png");
  defaultBg = loadImage("Images/LightBG.webp");
  changeBg();

}

function setup() {
  createCanvas(1200,600);
  
  engine = Engine.create();
  world = engine.world;

  gameState = "onSling";

  base1 = new Base(490, 500, 320, 20);
  base2 = new Base(895, 300, 200, 20);

  side1 = new Base(600, 10, 1200, 20);
  side2 = new Base(1190, 10, 20, 1200);

  polygon = new Polygon(50, 300);

  slingshot = new Slingshot(polygon.body, {x:75, y:300});
  
  ground = new Base(600, 590, 1200, 20);

  //level one
  block1 = new Block(375, 470, 40, 40);
  block2 = new Block(415, 470, 40, 40);
  block3 = new Block(455, 470, 40, 40);
  block4 = new Block(495, 470, 40, 40);
  block5 = new Block(535, 470, 40, 40);
  block6 = new Block(575, 470, 40, 40);
  block7 = new Block(615, 470, 40, 40);

  //level two
  block8 = new Block(395, 430, 40, 40);
  block9 = new Block(435, 430, 40, 40);
  block10 = new Block(475, 430, 40, 40);
  block11 = new Block(515, 430, 40, 40);
  block12 = new Block(555, 430, 40, 40);
  block13 = new Block(595, 430, 40, 40);

  //level three
  block14 = new Block(415, 390, 40, 40);
  block15 = new Block(455, 390, 40, 40);
  block16 = new Block(495, 390, 40, 40);
  block17 = new Block(535, 390, 40, 40);
  block18 = new Block(575, 390, 40, 40);

  //level four
  block19 = new Block(435, 350, 40, 40);
  block20 = new Block(475, 350, 40, 40);
  block21 = new Block(515, 350, 40, 40);
  block22 = new Block(555, 350, 40, 40);

  //level five
  block23 = new Block(455, 310, 40, 40);
  block24 = new Block(495, 310, 40, 40);
  block25 = new Block(535, 310, 40, 40);

  //level six
  block26 = new Block(475, 270, 40, 40);
  block27 = new Block(515, 270, 40, 40);

  //level seven
  block28 = new Block(495, 230, 40, 40);


  //level one
  block29 = new Block(835, 270, 40, 40);
  block30 = new Block(875, 270, 40, 40);
  block31 = new Block(915, 270, 40, 40);
  block32 = new Block(955, 270, 40, 40);

  //level two
  block33 = new Block(855, 230, 40, 40);
  block34 = new Block(895, 230, 40, 40);
  block35 = new Block(935, 230, 40, 40);

  //level three
  block36 = new Block(875, 190, 40, 40);
  block37 = new Block(915, 190, 40, 40);

  //level four
  block38 = new Block(895, 150, 40, 40);
}
 
function draw() {

  background(backgroundImg);
  
  Engine.update(engine);

  textSize(25);
  text("Drag the Hexagon to destroy the Blocks", 350, 40);

  base1.display();
  base2.display();

  side1.display();
  side2.display();
  
  ground.display();

  slingshot.display();

  push();
  //level one
  fill("yellow");
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();

  //level two
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();

  //level three
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();
  block17.display();
  block17.score();
  block18.display();
  block18.score();

  //level four
  block19.display();
  block19.score();
  block20.display();
  block20.score();
  block21.display();
  block21.score();
  block22.display();
  block22.score();

  //level five
  block23.display();
  block23.score();
  block24.display();
  block24.score();
  block25.display();
  block25.score();

  //level six
  block26.display();
  block26.score();
  block27.display();
  block27.score();

  //level seven
  block28.display();
  block28.score();
  pop();

  push();
  fill("red");
  //level one
  block29.display();
  block29.score();
  block30.display();
  block30.score();
  block31.display();
  block31.score();
  block32.display();
  block32.score();

  //level two
  block33.display();
  block33.score();
  block34.display();
  block34.score();
  block35.display();
  block35.score();

  //level three
  block36.display();
  block36.score();
  block37.display();
  block37.score();

  //level four
  block38.display();
  block38.score();
  pop();

  polygon.display();

  fill("yellow");
  text("Score: " +score, 30, 40);
  
  drawSprites();
}

function mouseDragged(){
  if(gameState!== "launched") {
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32 && polygon.body.speed < 1.5){
  gameState = "onSling";
  Matter.Body.setPosition(polygon.body, {x:75, y: 300});
  slingshot.attach(polygon.body);
  Matter.Body.setAngle(polygon.body, 0);
  }
}

async function changeBg() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);

  if(hour > 06 && hour < 18) {

    backgroundImg = loadImage("Images/LightBG.webp");

  } else {

    backgroundImg = loadImage("Images/DarkBG.jpg"); 

  }

}