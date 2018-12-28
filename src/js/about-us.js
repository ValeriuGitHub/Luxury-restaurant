const aboutUs = function() {
	$('.cook-slider__list').slick({
		arrows : false,
		dots: true,
		dotsClass: "about-us__cook-dots",
		slidesToScroll: 4,
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 620,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
}