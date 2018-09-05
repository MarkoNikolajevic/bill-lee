// Animated caret down
const caret = document.querySelector('.caret-down');
const header = document.querySelector('.main-header');

header.addEventListener('mouseover', function() {
	caret.classList.add('translate');
	header.addEventListener('mouseleave', function() {
		caret.classList.remove('translate');
	});
});

// Mobile navbar
mobileNav();

function mobileNav() {
	const hamburger = document.querySelector('.hamburger-menu');
	const nav = document.querySelector('.nav-mobile');
	hamburger.addEventListener('click', function() {
		hamburger.classList.toggle('animated');
		nav.classList.toggle('slide-right');
		nav.classList.toggle('display-none');
		closeNav();
	});
}

function closeNav() {
	let links = document.querySelectorAll('.mobile-nav-link');
	links = Array.from(links);
	links.forEach(function(elem) {
		elem.addEventListener('click', function() {
			const hamburger = document.querySelector('.hamburger');
			const nav = document.querySelector('.nav-mobile');
			nav.classList.add('display-none');
			hamburger.classList.remove('animated');
		});
	});
}
