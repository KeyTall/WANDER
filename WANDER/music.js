function play() {
	player.play();
	$("#play").css("display","none");
	$("#pause").css("display","inline");
}

function pause() {
	player.pause();
	$("#pause").css("display","none");
	$("#play").css("display","inline");
}

function volume() {
	let form = $("#volSlider");
	let newVolume = form.find('input[name="volumeValue"]').val()/100;
	console.log(newVolume);
	player.volume = newVolume;
}
