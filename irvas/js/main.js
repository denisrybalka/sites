$('.menu-nav').click(function() { // MENU-NAV - ЭТО БЛОК-КНОПОЧКА (ВМЕСТЕ В BEFORE И AFTER) ДЛЯ УПРАВЛЕНИЯ ПОЯВЛЕНИЕМ И ИСЧЕЗНОВЕНИЕМ МЕНЮ
	if ($('.header-wrap').hasClass('active')) { // NAV - ЭТО БЛОК КОТОРЫЙ ВМЕЩАЕТ В СЕБЯ ВСЕ ЭЛЕМЕНТЫ КОТОРЫЕ ДОЛЖНЫ ПОЯВИТЬСЯ/ИСЧЕЗНУТЬ
		$('.header-wrap').removeClass('active'); //                       -//-
		$('.header-elem').hide(); // NAV-BLOCK - ЭТО ОБЩИЙ КЛАСС ДЛЯ КАЖДОГО ИЗ ЭЛЕМЕНТОВ БЛОКА КОТОРЫЕ ДОЛЖНЫ ПОЯВИТЬСЯ/ИСЧЕЗНУТЬ
	} else {
		$('.header-wrap').addClass('active'); //
		$('.header-elem').show('slow'); //
	}
});

$('.know-more').click(function() {
	$('main').css('filter','blur(5px)');
	$('.hidden-form').fadeIn();
});

$('.primary-btn').click(function() {
	$('main').css('filter','blur(5px)');
	$('.hidden-form').fadeIn();
});

$('.close-popup').click(function() {
	$('.hidden-form').fadeOut();
	$('main').css('filter','none');
});
