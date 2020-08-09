$(document).ready(function() {
	$('#wrapper').css('margin-top', ($('#header').outerHeight(true) + 20) + 'px');

	var interval,
		c = document.getElementById("c"),
		ctx = c.getContext("2d");

	//making the canvas full screen
	c.height = window.innerHeight;
	c.width = window.innerWidth;

	//var chars = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
	var chars = "01";
	var chars = "01<>$#!*();"
	//converting the string into an array of single characters
	chars = chars.split("");


	var font_size = 10;
	var columns = c.width / font_size; //number of columns for the rain
	// an array of drops - one per column
	var drops = [];
	//x below is the x coordinate
	//1 = y co-ordinate of the drop(same for every drop initially)
	for(var x = 0; x < columns; x++) {
		drops[x] = 1;
	}

	//drawing the characters
	function draw() {
		//Black BG for the canvas
		//translucent BG to show trail
		ctx.fillStyle = "rgba(0, 0, 0, 0.075)";
		//ctx.fillStyle = "rgba(255, 255, 255, 0.075";
		//ctx.fillStyle = "rgba(0, 173, 239, 0.005)";
		ctx.fillRect(0, 0, c.width, c.height);

		ctx.fillStyle = "#e89300"; // orange text
		//ctx.fillStyle = "#008fd1"; // blue text
		ctx.font = font_size + "px arial";
		//looping over drops
		for(var i = 0; i < drops.length; i++)
		{
			//a random chinese character to print
			var text = chars[Math.floor(Math.random() * chars.length)];
			ctx.fillText(text, i * font_size, drops[i] * font_size);

			// sending the drop back to the top randomly after it has crossed the screen
			// adding a randomness to the reset to make the drops scattered on the Y axis
			if(drops[i] * font_size > c.height && Math.random() > 0.975) {
				drops[i] = 0;
			}

			//incrementing Y coordinate
			drops[i]++;
		}
	}

	// start & stop the rain effect when the button is clicked
	$('#btn').click(function() {
		if(!interval) {
			$('#wrapper').css('background', 'rgba(0, 173, 239, .2)');
			//$('.falcod-pane').css('background', 'rgba(0, 173, 239, .5)');
			interval = setInterval(draw, 33);
		} else {
			clearInterval(interval);
			ctx.clearRect(0, 0, c.width, c.height);
			interval = null;
		}
	});
});
