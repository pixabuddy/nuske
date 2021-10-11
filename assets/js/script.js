(function ($) {
	'use strict';
	var nav_offset_top = $('header').height() + 50;

	function navbarFixed() {
		if ($('.header_area').length) {
			$(window).scroll(function () {
				var scroll = $(window).scrollTop();
				if (scroll >= nav_offset_top) {
					$('.header_area').addClass('navbar_fixed');
				} else {
					$('.header_area').removeClass('navbar_fixed');
				}
			});
		}
	}
	navbarFixed();
	if (document.getElementById('number-section')) {
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});
	}

	$(document).ready(function () {
		$('.art-carousel').owlCarousel({
			items: 3,
			autoplay: false,
			loop: true,
			nav: true,
			margin: 30,
			dots: false,
			responsive: {
				0: {
					items: 2
				},
				480: {
					items: 2,
					center: true,
					margin: -15
				},
				768: {
					items: 3,
					margin: 18
				},
				992: {
					items: 3
				}
			}
		});
		$('.owl-prev').html('<i class="fa fa-chevron-left"></i>');
		$('.owl-next').html('<i class="fa fa-chevron-right"></i>');
	});
})(jQuery);

// Active toggler menu 👇

var header = document.getElementById('navMenu');
var btns = header.getElementsByClassName('nav-item');
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', function () {
		var current = document.getElementsByClassName('active');
		current[0].className = current[0].className.replace(' active', '');
		this.className += ' active';
	});
}

// Active toggler menu 👆
