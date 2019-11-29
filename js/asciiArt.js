$(document).ready(function() {
	var interval,
		c = document.getElementById("c"),
		ctx = c.getContext("2d");

	//making the canvas full screen
	c.height = window.innerHeight;
	c.width = window.innerWidth;

	function draw() {

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
});