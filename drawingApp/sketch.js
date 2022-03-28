//global variables that will store the toolbox colour palette
//and the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
var extraCanvas;


function setup() {

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");
    
    
    // set default angle mode
    angleMode(DEGREES);

	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();
    
    // instantiate layer tool
    layerTool = new LayerTool();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new MirrorDrawTool());
    toolbox.addTool(new RectangleTool());
    toolbox.addTool(new RadialTool());
    toolbox.addTool(new EraserTool());
    toolbox.addTool(new StampTool());
    toolbox.addTool(new BackgroundTool());
    toolbox.addTool(new BackgroundImageTool());
    toolbox.addTool(new FireTool());

}

function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}
    
    // retain the pre-selected colour for each new tool selected 
    fill(colourP.selectedColour);
    stroke(colourP.selectedColour);
    
    
}

