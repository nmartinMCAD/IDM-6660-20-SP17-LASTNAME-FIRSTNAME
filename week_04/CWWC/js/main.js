var navButton =
document.querySelector('.fa-bars');

navButton.addEventListener('click',
	function() {
		console.log('clicky!!!');
		document
			.querySelector('body')
			.classList
			.toggle('nav-open');
});

var closeButton =
document.querySelector('.fa-times')

closeButton.addEventListener('click',
	function() {
		console.log ('clicky!!!');
		document.
			querySelector('body')
			.classList
			.toggle('nav-open');
		});
