function SprayCanTool()
{
    this.name = "sprayCanTool";
    this.icon = "assets/spray.jpg";
    
    //this changes in the p5.dom click handler. So storing it as
	//a variable self now means we can still access this in the handler
	var self = this;
    
    // slider for controlling spread size and positioning div
    var spreadSlider;
    var spreadSliderName;

    // slider and positioning div for point density
    var pointsSlider;
    var pointsSliderName;
    
    
    this.draw = function(){
        
        strokeWeight(0);
        
        // label the spread slider and display the value
        spreadSliderName.html("Size " + spreadSlider.value());
        
        // label the points slider and display the value
        pointsSliderName.html("Density " + pointsSlider.value());
        
        // update the spread value based on the slider value
        this.spread = spreadSlider.value();
        
        // update the points density based on the slider value
        this.points = pointsSlider.value();
        
        //if the mouse is pressed paint on the canvas
        //spread describes how far to spread the paint from the mouse pointer
        //points holds how many pixels of paint for each mouse press.
        if(mouseIsPressed){
            for(var i = 0; i < this.points; i++){
                
                //mouse must be on canvas to draw
                if(mouseY <= canvasContainer.size().height &&
                   mouseY > 0 && mouseX <= canvasContainer.size().width &&
                   mouseX > 0)
                    {
                        point(random(mouseX - this.spread, mouseX + this.spread), 
                        random(mouseY - this.spread, mouseY + this.spread));
                    }
            }

        }
    }
    
    //clear options button on tool deselect
    this.unselectTool = function() {
    select(".options").html("");
    }
    
	//toggle the size of the spread of points
	this.populateOptions = function() {
        
        // creates slider for controlling spread size and positioning div
        spreadSlider = createSlider(1, 100, 50, 1);
        spreadSliderName = createDiv();

        // create slider and positioning div for point density
        pointsSlider = createSlider(1, 100, 50, 1);
        pointsSliderName = createDiv();

        // position the sliders inside the options div
        spreadSlider.parent(select(".options"));
        spreadSliderName.parent(select(".options"));
        
        pointsSlider.parent(select(".options"));
        pointsSliderName.parent(select(".options"));
        

	};


}