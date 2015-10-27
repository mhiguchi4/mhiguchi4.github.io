


//when user clicks on one of the neighborhoods in #filter,
//photos will filter based on that neighborhood selected
$("#filter").on("change", function() {
	// Find out what the user selected and save to a variable
	var selectedLocation = $("#filter").val();

	// if selectedLocation = default
	if (selectedLocation === "default") {
		// Fade in all thumbnails
		$(".thumbnail").fadeIn(350);
	// else
	} else {
		$(".thumbnail").fadeOut(350, function () {
			// Show all thumbnails with the corresponding class
			$('.f-' + selectedLocation).fadeIn(350);
		});
	}
});
