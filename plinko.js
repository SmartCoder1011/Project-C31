class plinko {
    constructor(x, y) {
      var options={
        isStatic:true,
        density:0.8,
        restitution:1,
        friction:0
      }
      this.body=Bodies.circle(x,y,10,options);
      World.add(world,this.body);
      
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("white");
      
      ellipse(pos.x,pos.y,10,10)
    }
  };
 