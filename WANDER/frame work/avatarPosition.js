let curColumn = 0;
let curRow = 0;
let avtPos = null;


function getAvatarPosition() {
	curColumn = parseInt(avatar.css("left"))/cellArea;
	curRow    = parseInt(avatar.css("top"))/cellArea;
	avtPos = {x: curColumn, y: curRow};

	counter.html("x: " + avtPos.x + ", y: " + avtPos.y);
}