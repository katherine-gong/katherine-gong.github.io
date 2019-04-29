$(document).ready(function() {
	const distanceToNextImage = -450;
	let currentImageNumber = 0;

	// YOUR CODE HERE
$("#right").click(function(){
	currentImageNumber = currentImageNumber + 1;
	$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage)
})

$("#left").click(function() {
	currentImageNumber = currentImageNumber - 1;
	$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage)
})
	
	// OTHER CODE
	// This closes the lightbox when you click on the overlay or the x.
	$("#overlay, #close").click(function() {
		$("#lightbox").hide();
	})
});