// draws straight lines
function LineToTool(){
    // set an icon and name for the object
	this.icon = "assets/line.jpg";
	this.name = "LineTo";
    
    //to draw a straight line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from frame when the mouse is clicked to the frame
    //that the mouse is released. They are -1 to start with because
	//we haven't started drawing yet.

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){
        
        // default strokeWeight
        strokeWeight(1);
        
        // if the mouse is pressesd
		if(mouseIsPressed){
            
            // check that the startMouseX is -1.
			if(startMouseX == -1){
                
                // sets the current mouse location to the start of the line
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
                
                // add the current pixel data to the pixels array
				loadPixels();
			}
            
            //if startMouseX has been reassigned, draw a line from the
            // startMouse position to the current position of the mouse
			else{
                strokeWeight(self.size);
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

        // if the mouse has been released, set the 
        // start mouse positions back to -1
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};
    
    //clear options button on tool deselect
    this.unselectTool = function() {
    select(".options").html("");
    };
    
    //adds 3 buttons and click handlers to the options area. When clicked
	//toggle the stroke weight of the pen
	this.populateOptions = function() {
		select(".options").html(
			"<button class='BTN-tool' id='small'>Precise</button><button class='BTN-tool' id='medium'>Bold</button><button class='BTN-tool' id='large'>Heavy</button>");
        
		// 	//click handlers
		select("#small").mouseClicked(function() {
			self.size = 1;
            
           });
        
        select("#medium").mouseClicked(function() {
			self.size = 2;
            
           });
        
        select("#large").mouseClicked(function() {
			self.size = 5;
            
           });
	};

}