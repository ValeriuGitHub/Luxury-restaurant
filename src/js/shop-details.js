function shopDetails() {
	let $buttonPlus = $('#plus'),
	    $buttonMinus = $('#minus'),
	    $counter = $('#product-counter');

		$(".products-form__minus-icon").addClass("products-form__minus-icon_active");

	$buttonPlus.on('click', function(){
		let resultUp = $counter.val( parseInt($counter.val()) + 1 );
		if(resultUp.val() >= 1) {
			$(".products-form__minus-icon").removeClass("products-form__minus-icon_active");
		}
		if(resultUp.val() >= 5) {
			$(".products-form__plus-icon").addClass("products-form__plus-icon_active");
		}
	});
	$buttonMinus.on('click', function(){
		let resultDown = $counter.val( parseInt($counter.val()) - 1 );
		if(resultDown.val() == 1) {
			$(".products-form__minus-icon").addClass("products-form__minus-icon_active");
		}
		if(resultDown.val() <= 5) {
			$(".products-form__plus-icon").removeClass("products-form__plus-icon_active");
		}
	});
}