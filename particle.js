class particle {
    constructor(x, y) {
      var options={
        isStatic:false,
        restitution:0.4,
      }
      this.body=Bodies.circle(x,y,10,options);
      this.color=color(random(0,255),random(0,255),random(0,255))
      World.add(world,this.body);
      
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x,pos.y)
      rotate(angle);
      noStroke();
      ellipseMode(RADIUS);
      fill("green");
      
      ellipse(pos.x,pos.y,10,10)
      pop();
    }
  };
 