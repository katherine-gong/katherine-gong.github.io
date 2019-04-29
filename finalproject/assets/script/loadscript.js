
$(document).ready(function(){

	var preload = document.getElementById("preload");
	var loading = 0;
	var id = setInterval (frame, 64);

	function frame () {
		if(loading == 100) {
			clearInterval(id);
			// window.open("about.html");
		} else {
			loading = loading + 1;
			if(loading == 90) {
				preload.style.animation = "fadeout 1s ease"; 
			}
		}
	}
	// Use string manipulation to get the value of our querystring parameter for redirect location
	var x = window.location.search.split("=")[1];
	setTimeout(function() {
		if (x == undefined) {
			x = "index.html";
		}
		window.location.assign(x);

	}, 2000)
	
})
