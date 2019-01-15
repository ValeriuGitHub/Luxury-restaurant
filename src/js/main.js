// Anchor animation

$("a[data-type='scroll']").on('click', function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
		top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1500);
})

// mask

$(function() {
	if($('input[name=phone]').length > 0) {
		$("input[name=phone]").mask("+38(099) 99-99-999");
	}
});

// Header DropDown

$(".header-cart").click(function(){
	$(".header-dropdown").addClass("header-dropdown_active");
	$(".header-cart__icon").addClass("header-cart__icon_active");
});

$(function(){
	$(document).mouseup(function (e){
		let dropDown = $("#dropdown");
		if (!dropDown.is(e.target) && dropDown.has(e.target).length === 0) {
			$(".header-dropdown").removeClass("header-dropdown_active");
			$(".header-cart__icon").removeClass("header-cart__icon_active");
		}
	});
});

// Google Map

$(function() {
	if($('#map').length > 0) {
		initMap();
	}
});

// Pages

homePage();
aboutUs();
shop();
shopDetails();
gallery();