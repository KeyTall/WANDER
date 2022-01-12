let linesOfDialogue = 0;
let inConvo = false;
let inProx  = false;
let line = 0;
let data;

let baseURL = "https://raw.githubusercontent.com/KeyTall/jsons/main/";
let hiroto_main = "hiroto_main.json";
let hiroto_route1 = "hiroto_route1.json"
let hiroto_route2 = "hiroto_route2.json"
let hiroto_route3 = "hiroto_route3.json"

url = baseURL + hiroto_main;

function main(e) { 
	x = parseInt(avtPos.x+.5);
	y = parseInt(avtPos.y+.5);
	inProx = findObjectCord(x,y,interact);
	
	//in proximity and in conversation
	if (inProx && !inConvo) { console.log("main() > inProx and !inConvo");
		$("#chatIndicator").fadeIn(200);
	
	//not in proximity and not in conversation
	} else if (!inProx && !inConvo) { console.log("main() > !inProx and !inConvo");
		$("#chatIndicator").fadeOut(200);
	
	//not in proximity and in conversation
	} else if (!inProx && inConvo) { console.log("main() > !inProx and inConvo");
		line = 0;
		inConvo = false;

		$(".textBox").fadeOut(200);
		$("#opt1").fadeOut(200);
		$("#opt2").fadeOut(200);
		$("#opt3").fadeOut(200);
	}
}

function talk(e) { console.log("talk()");
	//in proximity and press Q
	if (e.keyCode==81 && inProx) { console.log("talk() > Q and inProx");
		
		//not in conversation
		if(!inConvo) { console.log("talk() > Q and inProx > !inConvo");
			getData(url);
			getCharacterInfo(); line++;
			$(".textBox").fadeIn(200); 
			$("#continueIndicator").fadeIn(200);
			$("#chatIndicator").fadeOut(200);
			inConvo = true;	
		
		//in conversation
		} else { console.log("talk() > Q and inProx > inConvo");
			runConvo();
		}
	}
}

function runConvo() { console.log("runConvo()");
	console.log(linesOfDialogue); console.log(line+1);
	//if there is more dialogue 
	if (line+1<linesOfDialogue ) { console.log("runConvo() > more dialogue");
		npc();
		user();
	
	//if there is no more dialogue
	} else { console.log("runConvo() > no more dialogue");
		endConvo();
	}
}

function user() { console.log("user()");
	//if it is time for user to respond
	if (data.text[line+1]=="userInput") { console.log("user() > 'userInput' found");
		$("#continueIndicator").fadeOut(200); //switch to "continueIndicator"
		continueDialogue();

		//fill input boxes with Dialogue
		$("#opt1 p").html(data.text[line+1]);		
		$("#opt2 p").html(data.text[line+2]);
		$("#opt3 p").html(data.text[line+3]);

		//show input boxes
		$("#opt1").fadeIn(200);
		$("#opt2").fadeIn(200);
		$("#opt3").fadeIn(200);

		line += 3;
	}
}

function npc() { console.log("npc()");
	//if npc is to continue talking
	if (data.text[line+1]!="userInput") { console.log("npc() > no 'userInput' found");
		$("#continueIndicator").fadeOut(200);
		continueDialogue();
		$("#continueIndicator").fadeIn(200);
	}
}

function endConvo() { console.log("endConvo()");
	$.when($(".textBox").fadeOut(200)).done(function(){continueDialogue();});
	$("#chatIndicator").fadeIn(200);

	inConvo = false;
}

function userInputBoxes(num) { console.log("userResponseAnimation()");
	let t1=100; let t2=100; let t3=100;
	
	//left box is clicked
	if (num==1) { console.log("userResponseAnimation() > box1");
		t1=750; 
		$("#opt1").css('background', 'grey'); 
		url = baseURL + hiroto_route1;
	
	//top box is clicked
	} else if (num==2) { console.log("userResponseAnimation() > box2");
		t2=750; 
		$("#opt2").css('background', 'grey');
		url = baseURL + hiroto_route2;
	
	//right box is clicked
	} else { console.log("userResponseAnimation() > box3");       
		t3=750; 
		$("#opt3").css('background', 'grey');
		url = baseURL + hiroto_route3;
	} 
	
	line=0;
	getData(url); 
	continueDialogue();
	$("#continueIndicator").fadeIn(200);
	linesOfDialogue = data.text.length;
	
	$("#opt1").fadeOut(t1);
	$("#opt2").fadeOut(t2);
	$("#opt3").fadeOut(t3);
}