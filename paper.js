class Paper {  
    constructor(x, y, radius){
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0,
            isStatic : false
        }
        this.paper = Bodies.circle(x, y, radius, options);
        this.radius = radius
	    World.add(world, this.paper);
       
   }
   display(){
    push();
    fill("red");
    stroke("cyan")
    strokeWeight(3)
    ellipseMode(RADIUS);
    ellipse(this.paper.position.x, this.paper.position.y, this.radius, this.radius);
    pop();
   }
}
