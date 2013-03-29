function positionFooter() {
	var StickyFooter = $("#footer");
	if ((( $(document.body).height() + StickyFooter.outerHeight()) < $ (window).height() && StickyFooter.css("position") === "fixed") || ($(document.body).height() < $(window).height() && StickyFooter.css("position") !== "fixed")) {
		StickyFooter.css({ position: "fixed", bottom: "0px" }); }
	else {
		StickyFooter.css({ position: "static" }); }
	}

jQuery(document).ready(function($){

    /* prepend menu icon */
    $('#nav-wrap').prepend('<a href="#" id="shownav">Menu</a>');

    /* toggle nav */
    $("#shownav").on("click", function(e){
        $("#nav").slideToggle('fast', function() {
        // Animation complete.
        });
        e.preventDefault();
    });
    // Sticky Footer
	positionFooter(); $(window).scroll(positionFooter);
	$(window).resize(positionFooter);
	$(window).load(positionFooter);


});




