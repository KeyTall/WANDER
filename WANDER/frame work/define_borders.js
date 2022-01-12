const column_end = grid_columns-1;
const row_end = grid_rows-1;

//defines border of grid for avatar
//
//arguments: none
//returns: the corner or side of the grid-border the avatar hits
function hitBorder() {
	if (avtPos.x<=1 && avtPos.y<=0) { return "tlc"; //top-left-corner
	} else if (avtPos.x<=0 && avtPos.y>=row_end) { return "blc"; //bottom-left-corner
	} else if (avtPos.x>=column_end && avtPos.y<=0) {	return "trc"; //top-right-corner
	} else if (avtPos.x>=column_end && avtPos.y>=row_end) { return "brc"; //bottom-right-corner
	
	} else if (avtPos.x>=column_end) { return "rs"; //right-side
	} else if (avtPos.y>=row_end) { return "bs"; //bottom-side
	} else if (avtPos.x<=1) { return "ls"; //left-side
	} else if (avtPos.y<=0) { return "ts"; } //top-side
}

