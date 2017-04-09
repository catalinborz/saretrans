$(document).ready(function(){
	//fadeIn effect of thumbnails
	$("div.hidden").fadeIn(2000).removeClass('hidden');
	
	var all_thumbnails = $("#thumbnail1, #thumbnail2, #thumbnail3, #thumbnail4");
	//all_thumbnails.css('border', '2px solid green');


	if ( $(window).width() >= 767) { //767px in browser is 783px(16px difference)
		// $('#fixed_div_lg').affix({offset: {top: 0} }); 
		 $('.navbar').affix({ position: 'static' }); //sticky navbar not active
	}
	else {
		$('.navbar').affix({offset: {top: 320} }); //sticky navbar active
		//$('#fixed_div_lg').affix({ position: {static} }); 
	}
});