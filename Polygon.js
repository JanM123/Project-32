class Polygon {

    constructor(x, y){
  
      var options = {
          isStatic: false,
          'density': 2.0,
          'friction': 1.0
      }
  
      this.body = Bodies.circle(x, y, 35, options);
      this.image = loadImage("Images/Hexagon.png");
      this.radius = 35;
      World.add(world, this.body);
  
      }
  
  display(){
   
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius, this.radius);
      pop();
   }
  
  };