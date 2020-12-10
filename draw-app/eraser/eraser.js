/*
1. basic circle of white color.
2. adjustable size
3. own cursor
*/
var size = 30; // global variable for the size of the eraser

function keyTyped(){ //function for adjustable size of the eraser
    if(key === '+'){ // if you press "+" on your keyboard it would make the eraser bigger, "-" for making it smaller
        size = size + 10;
    }else if(key === '-'){
              size = size - 10;
          };
};



function EraserTool() {
    this.name = "eraserTool"; //allocates a name to the tool
    this.icon = "assets/eraser.png"; //displays the icon for it
    
    var startMouseX = -1; //sets starting coordinates of the mouse
	var startMouseY = -1;
    var erasing = false; //sets erasing mode to false

    this.draw = function(){
        if(mouseIsPressed){ 
            if(startMouseX == -1){ 
                startMouseX = mouseX; // updates startMouseX/Y variables
				startMouseY = mouseY;
				erasing = true;
				//save the current pixel Array
				loadPixels();
            }else{
                noStroke(); //no outline to the eraser
                fill(255); //sets white color
                ellipse(mouseX, mouseY, size, size);//creates the white circle for erasing
            }

        }else{
            if(erasing){
			//save the pixels with the most recent modification and reset the
			//erasing boolean and start locations
			loadPixels();
			erasing = false;
			startMouseX = -1;
			startMouseY = -1;
            
		    };
	    }; 
    };
};