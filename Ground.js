class Ground{
  constructor(x,y,w,h){
      var options = {
          isStatic:true
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
    fill("yellow");
    stroke("red");
    strokeWeight(5);
    rectMode(CENTER);
    rect(0,0,this.w,this.h);
    pop();
  }
}