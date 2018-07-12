// Slider
$(document).ready(function(){
	$('.js-slider').slick({
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					dots: true,
					arrows: false
				}
			},
		]
	});
});