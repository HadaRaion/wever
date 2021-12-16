const heroSliderEl = document.querySelector('.hero-slider');
const memberSliderEl = document.querySelector('.wow-slider');
const reviewSliderEl = document.querySelector('.review-slider');

if (heroSliderEl) {
	let heroSlider = new Swiper('.hero-slider', {
		effect: 'fade',
		pagination: {
			el: '.hero-slider-pagination',
			clickable: true,
		},
	});
}

if (memberSliderEl) {
	let memberSlider = new Swiper('.wow-slider', {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.wow-slider-btn-next',
			prevEl: '.wow-slider-btn-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			550: {
				slidesPerView: 3,
				spaceBetween: 40,
			},

			800: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			1024: {
				slidesPerView: 6,
				spaceBetween: 50,
			},
		},
	});
}

if (reviewSliderEl) {
	let reviewSlider = new Swiper('.review-slider', {
		pagination: {
			el: '.review-slider-pagination',
			clickable: true,
		},
	});
}
