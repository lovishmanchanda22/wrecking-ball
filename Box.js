class Box{
  constructor(x,y,w,h){
      var options = {
          restitution:0.0,
          friction:1.0,
          density:0.04
      }
      this.body = Matter.Bodies.rectangle(x,y,w,h,options);
      World.add(world,this.body);
      this.w = w;
      this.h = h;
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();

    rotate(angle);
    translate(pos.x,pos.y);
    fill("brown");
    stroke("yellow");
    strokeWeight(5);
    rectMode(CENTER);
    rect(0,0,this.w,this.h);
    pop();
  }
}