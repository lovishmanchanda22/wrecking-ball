class Ball{
  constructor(x,y,r){
      var options = {
          density: 0.5,
          frictionAir: 0.005
      }
      this.body = Matter.Bodies.circle(x,y,r,options);
      World.add(world,this.body);
      this.r = r;
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();

    rotate(angle);
    translate(pos.x,pos.y);
    fill("white");
    stroke("red");
    strokeWeight(5);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
  }
}