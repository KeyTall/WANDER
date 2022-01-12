//TREES
let walls    = new Array(100); //Walls, collidable objects
let grass    = new Array(100); //grass, sfx
let interact = new Array(100); //interact with npcs

//MAIN
let avatar = null;
let counter = null;
let gameWindow = null;

//CELL AREA
const cellArea = 75;
// @media 50, 25

//GRID
const grid_rows = 20;
const grid_columns = 20;

//MUSIC
let player = null;

//POSITION AVATAR
const centerX = 10;
const centerY = 6;

const avtX=cellArea*centerX;
const avtY=cellArea*centerY;

//WINDOW CENTER
const windowCenterX = 6;
const windowCenterY = 3;


//Set Scroller initial position
let scrollX = cellArea*(centerX-windowCenterX);
let scrollY = cellArea*(centerY-windowCenterY);

//Game Window
const numCellsHor = 13;
const numCellsVer =  7;

const windowWidth = cellArea*numCellsHor; //13 cells wide
const windowHeight = cellArea*numCellsVer; //7 cells high
// @media 12/6, 11/5 ... 5/5

function init() {
	//MAIN
	avatar = $("#avatar");
		avatar.css("left", avtX);
		avatar.css("top", avtY);
		avatar.css("width", cellArea);
		avatar.css("height", cellArea);
		
		avatar.attr("src", standD);
	
	//GAME WINDOW GRID MEASUREMENTS
	gameWindow = $(".gameWindow");
		gameWindow.css("grid-template-rows","repeat(" + grid_rows + "," + cellArea + "px)");
		gameWindow.css("grid-template-columns","repeat(" + grid_columns + "," + cellArea + "px)");
		gameWindow.css("width", windowWidth);
		gameWindow.css("height", windowHeight);

	//POSITION SCROLL BAR WITH AVATAR
		gameWindow.scrollLeft(scrollX);
		gameWindow.scrollTop(scrollY);
	
	//SCREENS	
	windowScreen = $(".windowScreen");
		windowScreen.css("width", windowWidth);
		windowScreen.css("height", windowHeight);

	titleScreen = $(".titleScreen");
		titleScreen.css("width", windowWidth);
		titleScreen.css("height", windowHeight);
	
	blackScreen = $("#blackScreen");
		blackScreen.css("width", windowWidth);
		blackScreen.css("height", windowHeight);
		
	//AVATAR TRACKER
	counter = $("#counter");
		getAvatarPosition();
		counter.html("x: " + avtPos.x + ", y: " + avtPos.y);
		
	//main music player
	player = document.getElementById('player');
	
	//define objects
	//addObjectCord(3,4, grass);
	
	//Talk with cute girl
	addObjectCord(13,7, interact);
	addObjectCord(15,7, interact);
	addObjectCord(13,8, interact);
	addObjectCord(14,8, interact);
	addObjectCord(15,8, interact);

	//TREES
	//Scatter
	addObjectCord(5,5,walls);
	addObjectCord(5,11,walls);
	addObjectCord(11,11,walls);
	addObjectCord(14,14,walls);
	addObjectCord(8,18,walls);
	addObjectCord(3,17,walls);
	addObjectCord(12,17,walls);
	addObjectCord(13,0,walls);
	addObjectCord(19,3,walls);
	addObjectCord(19,0,walls);
	addObjectCord(18,0,walls);
	
	//Cluster
	addObjectCord(14,18,walls);
	addObjectCord(14,19,walls);
	addObjectCord(15,18,walls);
	addObjectCord(16,18,walls);
	addObjectCord(17,18,walls);

	//LAKE
	addObjectCord(19,10,walls);
	addObjectCord(18,10,walls);
	addObjectCord(18,11,walls);
	addObjectCord(18,12,walls);
	addObjectCord(18,13,walls);
	addObjectCord(18,14,walls);
	addObjectCord(18,15,walls);
	addObjectCord(18,16,walls);
	addObjectCord(18,17,walls);

	//HOUSE
	//left
	addObjectCord(13,2,walls);
	addObjectCord(13,3,walls);
	addObjectCord(13,4,walls);
	addObjectCord(13,5,walls);
	addObjectCord(13,6,walls);

	//right
	addObjectCord(18,2,walls);
	addObjectCord(18,3,walls);
	addObjectCord(18,4,walls);
	addObjectCord(18,5,walls);
	addObjectCord(18,6,walls);

	//top
	addObjectCord(17,2,walls);
	addObjectCord(16,2,walls);
	addObjectCord(15,2,walls);
	addObjectCord(14,2,walls);
	addObjectCord(13,2,walls);

	//bottom
	addObjectCord(18,6,walls);
	addObjectCord(17,6,walls);
	addObjectCord(16,6,walls);
	addObjectCord(15,6,walls);
	addObjectCord(14,6,walls);
	addObjectCord(13,6,walls);

	//CLIFF
	addObjectCord(8,0,walls);
	addObjectCord(7,0,walls);
	addObjectCord(6,0,walls);
	addObjectCord(4,0,walls);
	addObjectCord(3,0,walls);
	addObjectCord(2,0,walls);
	addObjectCord(1,0,walls);
	addObjectCord(1,19,walls);
	addObjectCord(2,19,walls);
	addObjectCord(3,19,walls);
	addObjectCord(4,19,walls);
	addObjectCord(5,19,walls);
	
	//CUTE GIRL
	addObjectCord(14,7,walls);

console.log(walls);

}



window.onload = init;