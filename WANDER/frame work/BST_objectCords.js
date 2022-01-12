let index = 0;


//adds object to binary search tree (based on a array)
//
//arguments: (int, int, array) 
//return: none
function addObjectCord(x_cord, y_cord, tree) {
	let obj = {x:x_cord,y:y_cord};
	let curIndex = tree[index];
	let size = tree.length;
	
	//check if root is null
	if (tree[0]==null) {
		tree.splice(0,1,obj);
	
	//duplicate exists, don't input into array
	} else if(objEquals(obj,curIndex)) {
		return;
	
	//go to right child
	} else if (greaterThan(obj,curIndex)) {
		index = right(index);
		recursiveAddObjectCord(obj, tree);
	
	//go to left child
	} else {
		index = left(index);
		recursiveAddObjectCord(obj, tree);
	} index = 0;
}


//recursive function of addObjectCord
//
//arguments: (object, array) where object: (int, int)
//returns: none
function recursiveAddObjectCord(obj, tree) {
	//if index of space if filled, run function again
	if (tree[index]!=null) {
		addObjectCord(obj.x, obj.y, tree);
	
	//if index of space is not filled, fill
	} else {tree[index]=obj;}
}

//looks to see if there is object in cordinate
//
//arguments: (int, int, array)
//returns: true (in tree) or false (not in tree)
function findObjectCord(x_cord, y_cord, tree) {
	let obj = {x:x_cord,y:y_cord};
	let curObj = tree[index];	
	
	//if tree has no objects
	if (tree[0]==null) { return false;}
	
	//if the root obj is what we are lookin' for
	if (objEquals(obj,curObj)) {return true;}
	
	//while there are children
	while (tree[index]!=null) {
		curObj = tree[index];
		//if the object at this index is the obj lookin' for
		if (objEquals(obj,curObj)) {
			index = 0;
			return true;
		//if the object at this index in not what lookin' for, run while loop again
		} else {
			if (greaterThan(obj,curObj)) {index = right(index);} 
			else {index = left(index);}
		}	
	} index=0; return false; //if cant find the obj
}

//determines if cord1 is greater than cord1 
//
//Note: treats x as negative var and y as positive, and then adds the two to get a value;
//arguments: (object, object) where object: (int,int)
//returns: true (greater than) or false (less than or equal)
function greaterThan(cord1, cord2) {
	let cord1val = -cord1.x + cord1.y;
	let cord2val = -cord2.x + cord2.y;
	
	if (cord1val > cord2val) { return true; }
	else { return false;}
}

//equals for objects
//
//arguments: (object, object) where object: (int,int)
//returns: true (both objects are same) or false (objects are different)
function objEquals(obj1, obj2) {
	if (obj1.x==obj2.x && obj1.y==obj2.y) {return true;}
	else {return false;}
}

//get right child
function right(index) {
	index = 2*index+2;
	return index;
}

//get left child
function left(index) {
	index = 2*index+1;
	return index;
}
