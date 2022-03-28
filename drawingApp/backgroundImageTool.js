function BackgroundImageTool(){
	//set an icon and a name for the object
	this.icon = "assets/imageUpload.JPG";
	this.name = "backgroundImageTool";
    this.size = 50;
    
    var input;
    var inputName;
    var img;
    
    // boolean to switch image display to true and false
    var showImage = true;
    
    //this changes in the p5.dom click handler. So storing it as
	//a variable self now means we can still access this in the handler
	var self = this;
    
    // create a second canvas to draw on
    var layerOne = createGraphics(canvasContainer.size().width, canvasContainer.size().height);
    layerOne.parent("content");

	this.draw = function(){

        // if true, display
        if(showImage){
            if(img){
            image(img,0,0, width, height);
            }
        }
        
        
	};
    
    
    //callback to load images from file directory
    function handleFile(file) {
        print(file);
        if(file.type ==='image'){
            img = createImg(file.data, '');
            img.hide();
            img.size(width, height);
        }
        
        else{
            img = null;
        }
    }
    
    
    //clear options button on tool deselect
    this.unselectTool = function() {
    select(".options").html("");
    }
    
	//toggle the size of the spread of points
	this.populateOptions = function() {
        
        // create button for removing loaded file
        select(".options").html(
			"<button class='BTN-tool' id='removeImage'>Remove Image</button>");
        
        // click handler for removing image button
		select("#removeImage").mouseClicked(function() {
            
            background(255);
            img = null;

           });
        

        // create button choose image to upload & position in options div
        input = createFileInput(handleFile);
        input.parent(select(".options"));
        
    
    
    }
}