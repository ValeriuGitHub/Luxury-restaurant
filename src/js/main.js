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

// Google Map

$(function() {
	if($('#map').length > 0) {
		initMap();
	}
});

// Gallery

$(function() {
	if($('.macy-container').length) {
		gallery();
	}
});

// Pages

homePage();
aboutUs();
shop();
shopDetails();