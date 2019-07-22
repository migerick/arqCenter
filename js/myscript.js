$(document).ready(function() {
	//Hacia arriba
	irArriba();
});

function irArriba() {
	$('.ir-arriba').click(function() {
		$('body,html').animate({ scrollTop: '0px' }, 1000);
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() > 0) {
			$('.ir-arriba').slideDown(600);
		} else {
			$('.ir-arriba').slideUp(600);
		}
	});
	$('.ir-abajo').click(function() {
		$('body,html').animate({ scrollTop: '1000px' }, 1000);
	});
}

$('li.dropdown').hover(function() {
		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});