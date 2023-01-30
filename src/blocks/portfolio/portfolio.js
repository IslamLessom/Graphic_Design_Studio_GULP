import Swiper, { Navigation } from 'swiper';

(() => {

	new Swiper(".portfolio__slider", {
		spaceBetween: 30,
		slidesPerView: 3,
		loop: true,
		modules: [Navigation],
		navigation: {
			prevEl: '.portfolio__prev',
			nextEl: '.portfolio__next',
			disabledClass: 'disabled'
		},
		breakpoints: {
			1200: { 
				slidesPerView: 3,
			},
			800: { 
				slidesPerView: 2,
			},
			480: { 
				spaceBetween: 32,
				slidesPerView: 1,
			},
			0: { 
				spaceBetween: 23,
				slidesPerView: 1,
			}
		}
	});
	
})();
