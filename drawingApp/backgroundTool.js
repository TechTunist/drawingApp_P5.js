function BackgroundTool(){
	//set an icon and a name for the object
	this.icon = "assets/colourCanvas.jpg";
	this.name = "background";
    
    
    // initialize sliders
    var redSlider;
    var greenSlider;
    var blueSlider;
    
    // initialise divs to position sliders correctly
    var redSliderName;
    var greenSliderName;
    var blueSliderName;
    
    
    this.draw = function() {
        var r = redSlider.value();
        var g = greenSlider.value();
        var b = blueSlider.value();
        background(r, g, b);
        
        // slider labels
        redSliderName.html("Red");
        greenSliderName.html("Green");
        blueSliderName.html("Blue");
        
    }

    //clear options button on tool deselect
    this.unselectTool = function() {
    select(".options").html("");
    }
    
	//toggle the adjustable background colour
	this.populateOptions = function() {

        // create sliders
        redSlider = createSlider(0, 255, 100);
        greenSlider = createSlider(0, 255, 0);
        blueSlider = createSlider(0, 255, 255);
        
        // creates positioning div
        redSliderName = createDiv();
        greenSliderName = createDiv();
        blueSliderName = createDiv();
        
        
        // position the sliders inside the options div
        redSliderName.parent(select(".options"));
        redSlider.parent(select(".options"));
        
        greenSliderName.parent(select(".options"));
        greenSlider.parent(select(".options"));
        
        blueSliderName.parent(select(".options"));
        blueSlider.parent(select(".options"));
        
        
        
        
	};
    
    
}