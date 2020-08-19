class Block {

    constructor(x, y, width, height){
  
      var options = {
          isStatic: false,
      }
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      
      World.add(world, this.body);
      }
  
      display(){
      var angle = this.body.angle;
      if(this.body.speed < 3) {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        } else {
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility - 5;
          tint(255, this.visibility);
          rotate(angle);
          rectMode(CENTER);
          rect(this.body.x, this.body.y, this.width, this.height);
          pop();
      }
    }

    score() {
      if(this.visibility < 0 && this.visibility > -1005) {

        score++;
        //console.log("hi");

      }
    }
  };