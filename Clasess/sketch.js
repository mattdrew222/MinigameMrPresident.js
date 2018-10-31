//create an empty array called balls
let balls = [];


function setup() {
  	createCanvas(500, 400);
}

function draw(){
	background(220);
  	paddle();

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	balls[i].drawBall();
       balls[i].moveBall();
        	balls[i].bounceBall();
	  }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
    let  b = new Ball(0, 100, 3);
    balls.push(b);
    console.log(balls); //print the balls array to the console
}

// make the paddle and attach it to the mouse
function paddle(){
  stroke("black");
  strokeWeight(10);
  line(mouseX,mouseY-20,mouseX,mouseY+20);
}

//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    		this.y = y;
        	this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    		stroke(0);
        	strokeWeight(1);
    		fill("red");
		ellipse(this.x,this.y,10,10);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

	//if the ball hits the paddle, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= mouseX-5 && this.x <= mouseX+5 && this.y > mouseY-20 && this.y < mouseY+20){
      			this.speed = -this.speed;
    		}
  	}

}
