$(document).ready(function(){  /* Esta función no recibe parametro*/
	var x = $('.menu').offset().top; /* La variable (x) guarda cual es la altura entre la parte superior de la página y el menú*/
	
	$(window).on('scroll', function(){
	if ( $(window).scrollTop() > x ){
		$('.menu').addClass('menu-fijo');
	} else {
		$('.menu').removeClass('menu-fijo');
	}
	
});
});






