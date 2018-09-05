const caret = document.querySelector('.caret-down');
const header = document.querySelector('.main-header');

header.addEventListener('mouseover', function() {
	caret.classList.add('translate');
	header.addEventListener('mouseleave', function() {
		caret.classList.remove('translate');
	});
});
