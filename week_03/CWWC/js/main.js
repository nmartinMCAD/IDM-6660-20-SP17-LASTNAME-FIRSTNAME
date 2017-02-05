var navButton =
document.querySelector('.menuicon');

navButton.addEventListener('click',
	function() {
		console.log('clicky!!!');
		document
			.querySelector('body')
			.classList
			.toggle('nav-open');
});

var closeButton =
document.querySelector('.close-icon')

closeButton.addEventListener('click',
	function() {
		console.log ('clicky!!!');
		document.
			querySelector('body')
			.classList
			.toggle('nav-open');
		});
