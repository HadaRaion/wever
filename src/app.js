import './styles/style.scss';
import MobileMenu from './scripts/MobileMenu';
import './scripts/Swiper';
new MobileMenu();

window.addEventListener('load', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	window.addEventListener('resize', () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
});

let page = document.querySelector('main');

if (page.classList.contains('features')) {
	document.querySelector('.menu-features').classList.add('current-menu');
}
if (page.classList.contains('how-it-works')) {
	document.querySelector('.menu-how-it-works').classList.add('current-menu');
}

if (page.classList.contains('wever-badges')) {
	document.querySelector('.menu-badges').classList.add('current-menu');
}

if (page.classList.contains('reviews')) {
	document.querySelector('.menu-reviews').classList.add('current-menu');
}
