const Engine = Matter.Engine,
World = Matter.World,
Body = Matter.Body,
Bodies = Matter.Bodies,
Constraint = Matter.Constraint;

var ball,world,engine,boxes = [],ground, r;



function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;


  ball = new Ball(200,200,40);
  ground = new Ground(600,590,1200,20);
  for (let i = 0; i < 6; i++) {
    var box1 = new Box(900,100,70,70);
    boxes.push(box1);
    var box2 = new Box(800,100,70,70);
    boxes.push(box2);
    var box3 = new Box(700,100,70,70);
    boxes.push(box3);
    
  }

  r = new Rope(ball.body,{x:440,y:50});

}

function draw() {
  background(0,100,255);  
  Engine.update(engine);
  ball.display();
  ground.display();

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].display();
    }

    r.display();
}
function mouseDragged(){
  Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}