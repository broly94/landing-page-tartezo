import scrollFunctionNavbar from './navbar.js';

document.addEventListener('DOMContentLoaded', function () {
	const width = window.matchMedia('(max-width: 700px)');
	window.onscroll = function () {
		scrollFunctionNavbar(width);
	};
});
