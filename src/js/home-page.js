function homePage() {
	// Banner slider
	$('.homepage-banner__list').slick({
		arrows : false,
		dots: true,
		dotsClass: "homepage-banner-dots",
	});
	// Show-hide text
	$("#about-button").on('click', function(){
		$("#about-left__text").toggle("slow", function() {
		});
	});
	// Special slider
	$('.special__list').slick({
		arrows : false,
		dots: true,
		dotsClass: "home-page-special-dots",
		slidesToScroll: 2,
		slidesToShow: 2,
		responsive: [
			{
				breakpoint: 851,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	// Tab
	$(".menu-items__list").not(":first").hide();

	$(".menu__item").each(function(i){
		$(this).attr('data-tab', 'tab'+ i)
	});
	$(".menu-items__list").each(function(i){
		$(this).attr('data-tab', 'tab'+ i)
	});
	$(".menu__link-text").each(function(i){
		$(this).attr('data-tab', 'tab'+ i)
	});

	$(".menu__item").on('click', function(e){
		e.preventDefault();
		let dataTab = $(this).data('tab');
		$(".menu__link-text").removeClass("menu__link-text_active");
		$(".menu__link-text").filter('[data-tab='+dataTab+']').addClass("menu__link-text_active");
		$(".menu-items__list").hide();
		$(".menu-items__list").filter('[data-tab='+dataTab+']').fadeIn(500);
	});
	// Clients slider
	$('.clients__list').slick({
		prevArrow: $('#clients__prev'),
		nextArrow: $('#clients__next'),
	});
}