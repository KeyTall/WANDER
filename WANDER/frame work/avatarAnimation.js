const standD = "PIXEL ART/Avatar/front view.png";
const stepLD = "PIXEL ART/Avatar/walk down left.png";
const stepRD = "PIXEL ART/Avatar/walk down right.png";

const standU = "PIXEL ART/Avatar/back view.png";
const stepLU = "PIXEL ART/Avatar/walk up left.png";
const stepRU = "PIXEL ART/Avatar/walk up right.png";

const standR = "PIXEL ART/Avatar/right view.png";
const stepRR = "PIXEL ART/Avatar/walk right right.png";
const stepRL = "PIXEL ART/Avatar/walk right left.png";

const standL = "PIXEL ART/Avatar/left view.png";
const standLL = "PIXEL ART/Avatar/walk left left.png";
const standLR = "PIXEL ART/Avatar/walk left right.png";

function avatarAnimationLeft() {
		if (avtImg>3) {avtImg=0;}
		
		//step  L
		if (avtImg==0) {
			avatar.attr("src", standLL);
			avtImg+=1;
		//stand
		} else if (avtImg==1) {
			avatar.attr("src", standL);
			avtImg+=1;
		//step R
		} else if (avtImg==2) {
			avatar.attr("src", standLR);
			avtImg+=1;
		} else {
			avatar.attr("src", standL);
			avtImg+=1;
		}
}

function avatarAnimationRight() {
		if (avtImg>3) {avtImg=0;}
		
		//step  L
		if (avtImg==0) {
			avatar.attr("src", standR);
			avtImg+=1;
		//stand
		} else if (avtImg==1) {
			avatar.attr("src", stepRL);
			avtImg+=1;
		//step R
		} else if (avtImg==2) {
			avatar.attr("src", standR);
			avtImg+=1;
		} else {
			avatar.attr("src", stepRR);
			avtImg+=1;
		}
}

function avatarAnimationUp() {
		if (avtImg>3) {avtImg=0;}
		
		//step  L
		if (avtImg==0) {
			avatar.attr("src", stepLU);
			avtImg+=1;
		//stand
		} else if (avtImg==1) {
			avatar.attr("src", standU);
			avtImg+=1;
		//step R
		} else if (avtImg==2) {
			avatar.attr("src", stepRU);
			avtImg+=1;
		} else {
			avatar.attr("src", standU);
			avtImg+=1;
		}
}

function avatarAnimationDown() {
		if (avtImg>3) {avtImg=0;}
		
		//step L
		if (avtImg==0) {
			avatar.attr("src", stepRD);
			avtImg+=1;
		//stand
		} else if (avtImg==1) {
			avatar.attr("src", standD);
			avtImg+=1;
		//step R
		} else if (avtImg==2) {
			avatar.attr("src", stepLD);
			avtImg+=1;
		} else {
			avatar.attr("src", standD);
			avtImg+=1;
		}
}