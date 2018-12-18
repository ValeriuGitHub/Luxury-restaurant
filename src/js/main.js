// Anchor animation

$("a[href^='#']").on('click', function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
		top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1500);
})

// Header DropDown

$(".header-cart").on('click', function(){
	$(".header-dropdown").toggleClass("header-dropdown_active");
    $(".header-cart__icon").toggleClass("header-cart__icon_active");
});