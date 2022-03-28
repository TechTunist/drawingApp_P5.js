function RadialTool(){
	//set an icon and a name for the object
	this.icon = "assets/radial.jpg";
	this.name = "radial";

	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet.
	var previousMouseX = -1;
	var previousMouseY = -1;
    
    //this changes in the p5.dom click handler. So storing it as
	//a variable self now means we can still access this in the handler
	var self = this;

	this.draw = function(){
        
        // label the stroke slider and display the value
        strokeSliderName.html("Thickness");
        
        
        // update the size value based on the slider value
        this.size = strokeSlider.value();
        
		//if the mouse is pressed
		if(mouseIsPressed){
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
            
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
                
                //mouse must be on canvas to draw
                if(mouseY <= canvasContainer.size().height &&
                   mouseY > 0 && mouseX <= canvasContainer.size().width &&
                  mouseX > 0)
                    {
                        // strokeweight adjusts to selected button
                        strokeWeight(this.size);
                        // create rainbow effect
                        colorMode(HSB);
                        stroke((5*frameCount) % 360, 80, 140);
                        line(previousMouseX, previousMouseY, mouseX, mouseY);
                    }
                

			}
            
            //reset colour back to default for next tool selection
            stroke(0);
            colorMode(RGB);
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		//try and comment out these lines and see what happens!
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};
    
//    determine the correct colour range
    function rainbow(n) {
    n = n * 240 / 255;
    return 'hsl(' + n + ',100%,50%)';
}
    rainbow(100);
    
    
    //clear options button on tool deselect
    this.unselectTool = function() {
    select(".options").html("");
    }
    
	//toggle the line thickness of the radial pattern
	this.populateOptions = function() {
        

        // create slider and positioning div for point density
        strokeSlider = createSlider(1, 50, 25, 1);
        strokeSliderName = createDiv();

        
        strokeSlider.parent(select(".options"));
        strokeSliderName.parent(select(".options"));
        

	};
}