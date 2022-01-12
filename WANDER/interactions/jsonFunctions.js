function getData(url) { 
	var xmlHttp = new XMLHttpRequest();
   	xmlHttp.open( "GET", url, false ); // false for synchronous request
   	xmlHttp.send( null );
  	let str = xmlHttp.responseText;	
	data = JSON.parse(str); console.log(data);
}

function getCharacterInfo() {
	if (data.type=="character") {
		$("#dialogue").html(data.text[0]);
		$("#pfp").attr('src', data.img);
		$("#name").html(data.name);
		linesOfDialogue = data.text.length;
	}
}

function continueDialogue() {
	$("#dialogue").html(data.text[line]); console.log(data.text[line]);
	line+=1;
}