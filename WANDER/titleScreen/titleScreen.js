function playGame() {
	$.when($(".screenContents").fadeOut(500)).done(function() {
		$.when($("#blackScreen").fadeOut(3000)).done(function() {
			$.when($("#title").fadeOut(500)).done(function() {
				$(".titleScreen").css('display','none');
			});
		});
	});

	player.play();
}

function showControls() {
	$(".controls").fadeIn(200);
	console.log("showControls()");
}

function showMenu() {
	$(".controls").fadeOut(200);
	console.log("showMenu()");
}