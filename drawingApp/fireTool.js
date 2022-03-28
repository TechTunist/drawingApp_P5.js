function FireTool(){
    
    
    //set an icon and a name for the object
    this.name = "fireTool";
    this.icon = "assets/fire.jpg";
 
    // initiate array of fire particles
    var particles = [];


    this.draw = function() {

        noStroke();
        var index = 0;
        
        //mouse must be on canvas to draw
        if(mouseY <= canvasContainer.size().height &&
           mouseY > 0 && mouseX <= canvasContainer.size().width &&
           mouseX > 0)
            {
                // iterate through and draw all fire particles in the array
                while(index < particles.length) {
                  this.updateAndDrawParticle(particles[index]);
                  index ++;
                }
        
                // if mouse is pressed, add fire particle objects to particles array
                if(mouseIsPressed){
                    for(var i = 0; i < 10; i++) {
                    particles.push({
                      x: mouseX,
                      y: mouseY,
                      ySpeed: -1.5,
                      life: random(30, 100)
                      });
                    }
                }
            }
        
        
    }

    // function takes array of fire particles as argument
    // stops drawing if particle life expired
    this.updateAndDrawParticle = function(part) {
      if (part.life < 0) {
        return; 
      }
        
        // draw rising flame particles
        part.y += part.ySpeed;
        fill(255, part.life * 4, 0, 100);
        
        // make old particles smokey colour
        if (part.life < 10) {
          fill(255, 10);
        }
        
        // draw initial flame particles then
        // decrement the life property
        ellipse(part.x, part.y, 20, 30);
        part.life --;
      }
    
}

