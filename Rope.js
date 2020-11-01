class Rope{
    constructor(bodyA,pointB){
        var options = {
            stiffness:1,
            lenght:250,
            bodyA:bodyA,
            pointB:pointB
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
        this.pointB = pointB;
    }
    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(5);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }
}