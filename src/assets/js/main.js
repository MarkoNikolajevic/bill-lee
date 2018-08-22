document.addEventListener('DOMContentLoaded', function() {
	setTimeout(function() {
		const logo = document.querySelector('.jumbotron-logo');
		logo.classList.remove('hidden');
		logo.classList.add('fadeIn');
	}, 1000);
});
