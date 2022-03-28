function FreehandTool(){
	//set an icon and a name for the object
	this.icon = "assets/pencil.jpg";
	this.name = "freehand";

	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet.
	var previousMouseX = -1;
	var previousMouseY = -1;
    
//    var self = this;
    strokeWeight(1);

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
                strokeWeight(size);
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
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
    
    //adds 3 buttons and click handlers to the options area. When clicked
	//toggle the stroke weight of the pen
	this.populateOptions = function() {
		select(".options").html(
			"<button class='BTN-tool' id='small'>Precise</button><button class='BTN-tool' id='medium'>Bold</button><button class='BTN-tool' id='large'>Heavy</button>");
        
		// 	//click handlers
		select("#small").mouseClicked(function() {
			size = 1;
            
           });
        
        select("#medium").mouseClicked(function() {
			size = 2;
            
           });
        
        select("#large").mouseClicked(function() {
			size = 5;
            
           });
	};
}