// Anchor animation

$("a[href^='#']").on('click', function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
		top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1500);
})

// mask

jQuery(function($) {
	$("input[name=phone]").mask("+38(099) 99-99-999");
});

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
	dotsClass: "HomePage-banner-dots",
});

// HomePage - About

$("#about-button").on('click', function(){
	$("#about-left__text").toggle("slow", function() {
	});
});

// HomePage - Special

$('.special__list').slick({
	arrows : false,
	dots: true,
	dotsClass: "HomePage-special-dots",
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

// HomePage - Menu

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

// HomePage - Clients

$('.clients__list').slick({
	prevArrow: $('#clients__prev'),
	nextArrow: $('#clients__next'),
});

