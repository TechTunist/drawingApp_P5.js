function LayerTool(){
    
    var layerOne;
    var layerTwo;
    var layerThree;
 

    // create 3 other layers to draw on
    this.layerOne = createGraphics(canvasContainer.size().width, canvasContainer.size().height);
    this.layerOne.parent("content");

    // layer 2
    this.layerTwo = createGraphics(canvasContainer.size().width, canvasContainer.size().height);
    this.layerTwo.parent("content");
    
    // layer 3
    this.layerThree = createGraphics(canvasContainer.size().width, canvasContainer.size().height);
    this.layerThree.parent("content");
    
    // make extra canvas layers transparrent
    this.layerOne.clear();
    this.layerTwo.clear();
    this.layerThree.clear();

}


/* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    var myFunction = function() {
      document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }


