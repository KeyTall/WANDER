let intX = 0;
let intY = 0;

//checks if obj on left
//
//arguments: (int, int, array)
//returns: true (if obj on left cell) or false (if obj not on left cell)
function objLeft(x_cord, y_cord, tree) {
	x = avtPos.x;
	y = avtPos.y;
	intX = parseInt(x);
	intY = parseInt(y);
	
	if (intX==x) {
		return findObjectCord(x_cord,y_cord,tree) || (findObjectCord(x_cord,y_cord+1,tree) && y!=y_cord);
	}
}

//checks if obj on right
//
//arguments: (int, int, array)
//returns: true (if obj on right cell) or false (if obj not on right cell)
function objRight(x_cord, y_cord, tree) {
	x = avtPos.x;
	y = avtPos.y;
	intX = parseInt(x);
	intY = parseInt(y);
	
	if (intX==x) {
		return findObjectCord(x_cord,y_cord,tree) || (findObjectCord(x_cord,y_cord+1,tree) && y!=y_cord);
	}
}

//checks if obj is above
//
//arguments: (int, int, array)
//returns: true (if obj is above cell) or false (if obj is not above cell)
function objAbove(x_cord, y_cord, tree) {
	x = avtPos.x;
	y = avtPos.y;
	intX = parseInt(x);
	intY = parseInt(y);
	
	if (intY==y) {
		return findObjectCord(x_cord,y_cord,tree) || (findObjectCord(x_cord+1,y_cord,tree) && x!=x_cord);
	}
}

//checks if obj is below
//
//arguments: (int, int, array)
//returns: true (if obj is below cell) or false (if obj is not below cell)
function objBelow(x_cord, y_cord, tree) {
	x = avtPos.x;
	y = avtPos.y;
	intX = parseInt(x);
	intY = parseInt(y);
	
	if (intY==y) {
		return findObjectCord(x_cord,y_cord,tree) || (findObjectCord(x_cord+1,y_cord,tree) && x!=x_cord);
	}
}