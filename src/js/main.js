// Anchor animation

$("a[href^='#']").on('click', function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
		top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1500);
})

// Header DropDown

$(".header-cart").click(function(){
   	$(".header-dropdown").addClass("header-dropdown_active");
   	$(".header-cart__icon").addClass("header-cart__icon_active");
});

jQuery(function($){
	$(document).mouseup(function (e){
		let dropDown = $("#dropdown");
		if (!dropDown.is(e.target) && dropDown.has(e.target).length === 0) {
		   	$(".header-dropdown").removeClass("header-dropdown_active");
   			$(".header-cart__icon").removeClass("header-cart__icon_active");
		}
	});
});

// HomePage - Banner

$('.banner__list').slick({
	arrows : false,
	dots: true,
	dotsClass: "my-dots",
});