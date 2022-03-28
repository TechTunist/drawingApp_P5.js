function EraserTool(){
	//set an icon and a name for the object
	this.icon = "assets/eraser.jpg";
	this.name = "eraserTool";
    this.size = 30;

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
                        fill(255);
                        stroke(255);
                        strokeWeight(self.size);
                        line(previousMouseX, previousMouseY, mouseX, mouseY);
                        previousMouseX = mouseX;
                        previousMouseY = mouseY;
                        stroke(0);
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
    };
    
    //adds 3 buttosn and click handlers to the options area. When clicked
	//toggle the size of the eraser
	this.populateOptions = function() {
		select(".options").html(
			"<button class='BTN-tool' id='small'>Small</button><button class='BTN-tool' id='medium'>Medium</button><button class='BTN-tool' id='large'>Large</button>");
        
		// 	//click handlers
		select("#small").mouseClicked(function() {
			self.size = 30;
            
           });
        
        select("#medium").mouseClicked(function() {
			self.size = 100;
            
           });
        
        select("#large").mouseClicked(function() {
			self.size = 200;
            
           });
	};
}