$('.main-btn').click(function() {
	$('main').css('filter','blur(5px)');
	$('.modal').fadeIn();
});

$('.close-popup').click(function() {
	$('.modal').fadeOut();
	$('main').css('filter','none');
});

$('.popup-btn').click(function() {
	$('.modal').fadeOut();
	$('.thanks-modal').fadeIn()
});

$('.thanks-close-popup').click(function() {
	$('.thanks-popup').fadeOut();
	$('main').css('filter','none');
});
