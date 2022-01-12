const grass_sfx = new Audio('grass.wav');

function sfx() {
	x = parseInt(avtPos.x+.4);
	y = parseInt(avtPos.y+.9);
	
	if (findObjectCord(x,y,grass)) {
		grass_sfx.play();
	}
}