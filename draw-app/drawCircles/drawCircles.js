function DrawCircles(){
    // assigns an icon and a name for the drawCircles tool
    this.icon = "assets/cerc.jpg";
    this.name = "drawCircles";
    this.draw = function(){
        
        // Call the variableEllipse() method and send it the parameters for the current mouse position and the previous mouse position
        variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
    };
    
// The simple method variableEllipse() was created specifically for this program. It calculates the speed of the mouse and draws a small ellipse if the mouse is moving slowly and draws a large ellipse if the mouse is moving quickly
// abs returns a value of a number; in this case, it returns a speed value depending on how fast the position of the cursor based on the speed of the mouse
    
    function variableEllipse(x, y, px, py){
        let speed = abs(x - px) + abs(y - py);
        stroke(random(0,255),(0,255),(0,255));
        stroke(speed);
        if(mouseIsPressed){
            ellipse(x, y, speed, speed);
        };
    };
};