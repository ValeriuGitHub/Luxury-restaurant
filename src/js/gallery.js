function gallery() {

	var macy = Macy({
		columns: 3,
		container: '.macy-container',
		trueOrder: true,
		waitForImages: true,
		margin: {
			x: 15,
			y: 15
		},
		breakAt: {
			1024: {
				margin: {
					x: 10,
					y: 10,
				},
				columns: 2
			},
			450: {
				margin: {
					x: 5,
					y: 5,
				},
				columns: 1
			},
		}
	});

	// Tab
	$(".gallery-img__item").not(":first").hide();

	$(".gallery__item").each(function (i) {
		$(this).attr('data-tab', 'tab' + i)
	});
	$(".gallery-img__item").each(function (i) {
		$(this).attr('data-tab', 'tab' + i)
	});
	$(".gallery__text").each(function (i) {
		$(this).attr('data-tab', 'tab' + i)
	});

	$(".gallery__item").on('click', function (e) {
		e.preventDefault();
		let dataTab = $(this).data('tab');
		$(".gallery__text").removeClass("gallery__text_active");
		$(".gallery__text").filter('[data-tab=' + dataTab + ']').addClass("gallery__text_active");

		$(".gallery-img__item").hide();
		$(".gallery-img__item").filter('[data-tab=' + dataTab + ']').fadeIn(500);
		macy.reInit();
	});
}