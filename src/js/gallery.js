function gallery() {
	// Tab
	$(".gallery-img__item").not(":first").hide();

	$(".gallery__item").each(function(i){
		$(this).attr('data-tab', 'tab'+ i)
	});
	$(".gallery-img__item").each(function(i){
		$(this).attr('data-tab', 'tab'+ i)
	});
	$(".gallery__text").each(function(i){
		$(this).attr('data-tab', 'tab'+ i)
	});

	$(".gallery__item").on('click', function(e){
		e.preventDefault();
		let dataTab = $(this).data('tab');
		$(".gallery__text").removeClass("gallery__text_active");
		$(".gallery__text").filter('[data-tab='+dataTab+']').addClass("gallery__text_active");
		$(".gallery-img__item").hide();
		$(".gallery-img__item").filter('[data-tab='+dataTab+']').fadeIn(500);
	});

	// external js: masonry.pkgd.js

	$('.masonry-container').masonry({
		itemSelector: '.gallery-img__img',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});
}