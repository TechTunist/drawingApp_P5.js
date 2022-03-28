function StampTool(){
	//set an icon and a name for the object
	this.icon = "assets/stamp.jpg";
	this.name = "stampTool";
    this.stamp = loadImage("./assets/4star.png");
    this.size = 50;
    
    //this changes in the p5.dom click handler. So storing it as
	//a variable self now means we can still access this in the handler
	var self = this;
    
    // slider for controlling stamp size and positioning div
    var stampSlider;
    var stampSliderName;
    
	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet.
	var previousMouseX = -1;
	var previousMouseY = -1;

	this.draw = function(){
        
        // label the stamp slider and display the value
        stampSliderName.html("Stamp Size");
        
        
        // update the size value based on the slider value
        this.size = stampSlider.value();
        
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
                
                // center the stamp position on mouse
                var stampX = mouseX - this.size / 2;
                var stampY = mouseY - this.size / 2;

                //mouse must be on canvas to draw
                if(mouseY <= canvasContainer.size().height &&
                   mouseY > 0 && mouseX <= canvasContainer.size().width &&
                  mouseX > 0)
                    {
                        image(this.stamp, stampX, stampY, this.size, this.size);
                    }
			}
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		//try and comment out these lines and see what happens!
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
        

	};
    
    
    //clear options button on tool deselect
    this.unselectTool = function() {
    select(".options").html("");
    }
    
	//toggle the size of the spread of points
	this.populateOptions = function() {
        

        // create slider and positioning div for point density
        stampSlider = createSlider(5, 700, 50, 1);
        stampSliderName = createDiv();

        
        stampSlider.parent(select(".options"));
        stampSliderName.parent(select(".options"));
        

	};
}

