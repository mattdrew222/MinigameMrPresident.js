let balls = [];
var lazy;
let me;

let die = false;

let started = false

function setup() {
  createCanvas(500, 400);

  lazy = createButton('Start');
    lazy.position(250,200);
    lazy.mousePressed(game1);

  me = new Avatar(width/2, 300, 3);
}

if (started==true){}

function draw(){
	background(220);

  me.drawMe();
  me.moveMe();

  if (frameCount % 25 == 0) {
      let  b = new Ball(width, random(0,height), -3);
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
	  }
}

function game1(){
  started=true;
  lazy.hide();
}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke("blue");
        strokeWeight(3);
    		fill("blue");
		    ellipse(this.x,this.y,20,20);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+10, this.y+35);

	}

	moveMe(){
    if (keyIsDown(83)) { //if you hold the up arrow, move up by speed
       this.y += this.speed;
    }

    if (keyIsDown(87)) { // if you hold the down arrow, move down by speed
        this.y -= this.speed;
    }

    if (keyIsDown(68)) { // if you hold the down arrow, move down by speed
        this.x += this.speed;
    }

    if (keyIsDown(65)) { // if you hold the down arrow, move down by speed
        this.x -= this.speed;
    }
	}


}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    		this.y = y;
        	this.speed = speed-10;
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
    		if (this.x >= me.x-5 && this.x <= me.x+5 && this.y > me.y-20 && this.y < me.y+65){
      			this.speed = -this.speed;
            died = true;
    		}
  	   }
     }
  
