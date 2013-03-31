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

    // Open rel="external" in new window
    $('a[rel="external"]').click( function() {
        window.open( $(this).attr('href') );
        return false;
    });

    // Simple Tabs
    // http://www.jacklmoore.com/notes/jquery-tabs/

    $('ul.tabs').each(function(){
      // For each set of tabs, we want to keep track of
      // which tab is active and it's associated content
      var $active, $content, $links = $(this).find('a');

      // If the location.hash matches one of the links, use that as the active tab.
      // If no match is found, use the first link as the initial active tab.
      $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
      $active.addClass('active');
      $content = $($active.attr('href'));

      // Hide the remaining content
      $links.not($active).each(function () {
        $($(this).attr('href')).hide();
      });

      // Bind the click event handler
      $(this).on('click', 'a', function(e){
        // Make the old tab inactive.
        $active.removeClass('active');
        $content.hide();

        // Update the variables with the new link and content
        $active = $(this);
        $content = $($(this).attr('href'));

        // Make the tab active.
        $active.addClass('active');
        $content.show();

        // Prevent the anchor's default click action
        e.preventDefault();
      });
    });


});




