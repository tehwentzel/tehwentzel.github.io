function autoPlayYouTubeModal(){
  var trigger = $("body").find('[data-toggle="modal"]');
  trigger.click(function() {
    var theModal = $(this).data( "target" ),
    videoSRC = $(this).attr( "data-theVideo" ), 
    videoSRCauto = videoSRC+"?autoplay=1" ;
    $(theModal+' iframe').attr('src', videoSRCauto);
    $(theModal+' button.close').click(function () {
        $(theModal+' iframe').attr('src', videoSRC);
    });   
  });
}

// The function actually applying the offset
function offsetAnchor() {
  if (location.hash.length !== 0) {
	window.scrollTo(window.scrollX, window.scrollY - 50);
  }
}

$(document).ready(function(){
	autoPlayYouTubeModal();
	
	$(function () {
		$('circle').popover()
	});

	// Captures click events of all <a> elements with href starting with #
	$(document).on('click', 'a[href^="#"]', function(event) {
	  // Click events are captured before hashchanges. Timeout
	  // causes offsetAnchor to be called after the page jump.
	  window.setTimeout(function() {
		offsetAnchor();
	  }, 0);
	});

	// Set the offset when entering page with hash present in the url
	window.setTimeout(offsetAnchor, 0);
});