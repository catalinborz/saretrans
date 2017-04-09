$(document).ready(function(){

	if ( $(window).width() >= 767) {

	  $('a[href*="#"]:not([data-toggle="tab"])').click(function() { 
	  
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top-230/*scroll offset for large screen*/
			}, 2000);
			return false;
		  }
		}
	  });
	}
	else {
		
	  $('a[href*="#"]:not([data-toggle="tab"])').click(function() { 
	  
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top-30/*scroll offset for small screen*/
			}, 1700);
			return false;
		  }
		}
	  });
	}
});

/*-----------hide navbar after click-------250 offset-*/
$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});
