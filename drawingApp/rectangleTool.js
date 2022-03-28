function RectangleTool()
{
    this.name = "rectangleTool";
    this.icon = "assets/editableShape.jpg";
    
    var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
    
    //this changes in the p5.dom click handler. So storing it as
	//a variable self now means we can still access this in the handler
	var self = this;
    
    // determine fill type of rectangle
    let rectFill;

	this.draw = function(){
        
        // if the mouse is pressesd
		if(mouseIsPressed){
            
            // check that the startMouseX is -1.
			if(startMouseX == -1){
                
                // sets the current mouse location to the start of the rectangle
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
                
                // add the current pixel data to the pixels array
				loadPixels();
			}
            
            //if startMouseX has been reassigned, draw a rectangle 
            // starting from the startMouse position and finishing
            // at the final mouse position
			else
            {
                updatePixels();
                
                // determine empty or solid fill
                if(!rectFill)
                    {
                        // empty fill
                        fill(255,255,255,0)
                        
                    }

                strokeWeight(1.5);
				rect(
                    startMouseX,
                    startMouseY,
                    (mouseX - startMouseX),
                    (mouseY - startMouseY)
                ); 
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
    
    
    //when the tool is deselected update the pixels to just show the drawing and
	//hide the line of symmetry. Also clear options
	this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".options").html("");
	};
    
    //adds buttons to click handler to the options area. When clicked
	//toggle fill / nofill
	this.populateOptions = function() {
        
		select(".options").html(
			"<button class='BTN-tool' id='fill'>Fill</button><button class='BTN-tool' id='noFill'>No Fill</button>");

		 	//click handler
		select("#noFill").mouseClicked(function() {
			var button = select("#" + this.elt.id);
			rectFill = false;
		});
        
        select("#fill").mouseClicked(function() {
			var button = select("#" + this.elt.id);
			rectFill = true;
		});

	};
}