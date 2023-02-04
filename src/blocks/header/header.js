import scrollLock from 'scroll-lock';

(() => {
	const $header = $('.header');
	const $shell = $header.find('.header__menu');
	const $toggle = $header.find('.header__menu-toggle').add('.header__menu-close');

	$(window).on('scroll', function() {
		$header[($(this).scrollTop() > 30 ? 'add': 'remove') + 'Class']('header_filled');
	});

	$toggle.on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$(this).toggleClass('opened');
		$shell.toggleClass('opened');
		
		if($shell.hasClass('opened')) {
			$shell.css({'max-width': parseInt($shell.css('max-width')) + scrollLock.getPageScrollBarWidth()});
			scrollLock.disablePageScroll();
			return;
		}

		$shell.removeAttr('style');
		scrollLock.clearQueueScrollLocks();
		scrollLock.enablePageScroll();
	});

	$(window).on('click', function(e) {
		if($shell.hasClass('opened') && !e.target.closest('.header__menu')) {
			e.preventDefault();
			$toggle.toggleClass('opened');
			$shell.toggleClass('opened').removeAttr('style');
			scrollLock.clearQueueScrollLocks();
			scrollLock.enablePageScroll();
		}
	});

	$(".header__navi").on('click', 'a[href^="#"]', function(e) {
		e.preventDefault();
		let $element = $($(this).attr('href'));
	
		$("html, body").animate({ scrollTop: $element.offset().top }, "slow");
	});

})();
