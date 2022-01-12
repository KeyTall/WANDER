//avatar properties
const deltaPos = 15;
let avtImg = 0;
let x = 0;
let y = 0;

let	faceLeft  = false;
let	faceUp    = false;
let	faceRight = false;
let 	faceDown  = true;

//movement timer
let startTime;
let elapsed;
let running = false;

//AVATAR MOVEMENT
function getKeyAndMove(e) {
	if (!running) {
		running = true;
		startTime = new Date().getTime();
		move(e);
	} else {
		elapsed = new Date().getTime();
		if (elapsed > startTime && elapsed-startTime > 35) {
			running = false;
		}
	}
}

function clearTimer() {
	running = false;
}

function move(e) {
	x = parseInt(avtPos.x);
	y = parseInt(avtPos.y);

	let key_code = e.button || e.keyCode;
	switch (key_code) {
		case 65:
		case 37: //left arrow key
			moveLeft(); 
			break;
		case 87:
		case 38: //Up arrow key
			moveUp();
			break;
		case 68:
		case 39: //right arrow key
			moveRight();
			break;
		case 83:
		case 40: //down arrow key
			moveDown();
			break;
	} getAvatarPosition(); main(e); talk(e);
} 

//BY KEY
function moveLeft() {
	//if hit border, corner, or object
	if (hitBorder()!="ls" && hitBorder()!="tlc" && hitBorder()!="blc" && !objLeft(x-1,y,walls)){ 
		
		//if facing left then can move
		if (faceLeft) {
			//move left
			avatar.css("left", parseInt(avatar.css("left")) - deltaPos); 
			
			//scroller
			scrollX-=deltaPos;
			gameWindow.scrollLeft(scrollX);
		} 
		
		//avatar animation make into function
		avatarAnimationLeft();
	}
	
	//if can't move but not facing left
	if (!faceLeft) {
		avatarAnimationLeft();
	}
	
	//direction facing
	faceLeft  = true;
	faceUp    = false;
	faceRight = false;
	faceDown  = false;
}
function moveUp() {	
	//if hit border, corner, or object
	if (hitBorder()!="ts" && hitBorder()!="tlc" && hitBorder()!="trc" && !objAbove(x,y-1,walls)){
		
		if (faceUp) {
			//move up
			avatar.css("top",  parseInt(avatar.css("top"))  - deltaPos); 
		
			//scroller
			scrollY-=deltaPos;
			gameWindow.scrollTop(scrollY);
		}
		
		//avatar animation make into function
		avatarAnimationUp();
	}
	
	//if can't move but not facing up
	if (!faceUp) {
		avatarAnimationUp();
	}
	
	//direction facing
	faceLeft  = false;
	faceUp    = true;
	faceRight = false;
	faceDown  = false;
}
function moveRight() {
	//if hit border, corner, or object
	if (hitBorder()!="rs" && hitBorder()!="trc" && hitBorder()!="brc" && !objRight(x+1,y,walls)){ 
		
		if (faceRight) {
		//move right
			avatar.css("left", parseInt(avatar.css("left")) + deltaPos); 
			
			//scroller
			scrollX+=deltaPos;
			gameWindow.scrollLeft(scrollX);
		}
		
		//avatar animation make into function
		avatarAnimationRight();
	}
	
	//if can't move but not facing right
	if (!faceRight) {
		avatarAnimationRight();
	}
	
	//direction facing
	faceLeft  = false;
	faceUp    = false;
	faceRight = true;
	faceDown  = false;
	
}
function moveDown() {
	//if hit border,  corner, or object
	if (hitBorder()!="bs" && hitBorder()!="blc" && hitBorder()!="brc"  && !objBelow(x,y+1,walls)){ 
		
		if (faceDown) {
			//move down
			avatar.css("top",  parseInt(avatar.css("top"))  + deltaPos); 
			
			//scroller
			scrollY+=deltaPos;
			gameWindow.scrollTop(scrollY);
		}
		
		//avatar animation make into function
		avatarAnimationDown();
	}
	
	//if can't move but not facing down
	if (!faceDown) {
		avatarAnimationDown();
	}

	//direction facing
	faceLeft  = false;
	faceUp    = false;
	faceRight = false;
	faceDown  = true;
}
