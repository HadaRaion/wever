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
