// 1. plot out a shap as a series of vertices

// * add a button for switching between creating new vertices and editing
// * click the canvas to add a vertex
// * do not draw right away add vertex to an array then draw but do bot save to canvas

// 2. edit the vertices using a mouse drag

// * if editing is on
// * highlight the location of the vertices
// * when mouse pressed is near vertex (use dist), update the vertex x and y with the mouseX and mouseY

// 3. confirm final shape

function EditableShape(){
    
    //assigning variables
    var editButton;
    var finishButton;
    var editMode = false;
    var currentShape = [];
   
    this.name = "editableShape";
    this.icon = "assets/editShape.jpg";
    
    noFill();
    loadPixels();
    editButton = createButton('Edit shape'); // creates edit and finnish button
    finishButton = createButton('finish shape');
    editButton.mousePressed(function(){ //what happens when user clicks edit button
        if(editMode){ //if edit mode isn't on
            editMode = false;
            editButton.html('edit shape');//update button's text so it says edit mode
        }else{
            editMode = true; //when editmode is on the button will say add vertices
            editButton.html('add vertices');
        };
    });
   
    
    finishButton.mousePressed(function(){ // what happens when user clicks finnish button
        
        editMode = false;
        draw();
        loadPixels(); //saving the canvas in it's current state (with shapes)
        currentShape = []; //clear the currentShape array
    });

    this.draw = function(){   
        
        updatePixels();
        noFill();
    
        if(mouseX>0 && mouseX<1832 && mouseY>0 && mouseY<773 && mouseIsPressed){ //if the mouse is on the drawing canvas and being clicked
            if(!editMode){ //checks the edit mode to be off so we can add more lines to the shape
                currentShape.push({ //saves the coordinates at that certain time of clicking on the canvas
                    x: mouseX,
                    y: mouseY
            });
        }else{ //if edit mode is on it will consider all the saved points of the shape
            
                for(var i=0; i < currentShape.length; i++){
                    if(dist(currentShape[i].x, currentShape[i].y, mouseX, mouseY) < 15){ //checks if the mouse is approaching any point, if so, it will replace it's coordinates if the mouse drags it anywhere
                    
                        currentShape[i].x = mouseX;
                        currentShape[i].y = mouseY;
                    };
                };
            };
        };
        beginShape(); //will consider the currentShape array
        for (var i =0; i < currentShape.length; i++){
            vertex(currentShape[i].x, currentShape[i].y); //connects all the dots(coordinates saved in the array)
            if(editMode){//if edit mode is on, it highlights the saved points so they can be moved
                fill("green");
                ellipse(currentShape[i].x, currentShape[i].y, 10);
                noFill();
            };
        };
        endShape();
    };
    
};