function DrawSquares(){
    // assigns an icon and a name for the drawSquares tool
    this.icon = "assets/patrat.jpg";
    this.name = "drawSquares";
    this.draw = function(){
        // Call the variableRect() method and send it the parameters for the current mouse position and the previous mouse position
        variableRect(mouseX, mouseY, pmouseX, pmouseY);
    };
    
// The simple method variableRect() was created specifically for this program. It calculates the speed of the mouse and draws a small ellipse if the mouse is moving slowly and draws a large ellipse if the mouse is moving quickly
// abs returns a value of a number; in this case, it returns a speed value depending on how fast the position of the cursor based on the speed of the mouse
    
    function variableRect(x, y, px, py){
        let speed = abs(x - px) + abs(y - py);
        stroke(speed);
        if(mouseIsPressed){
        rect(x, y, speed, speed);
        };
    };
};