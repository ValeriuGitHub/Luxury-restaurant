function shop() {
	$(".product__like").on('click', function(e){
		e.preventDefault();
		$(this).toggleClass("product__like_active")
	});
}