import scrollFunctionNavbar from './navbar.js';

document.addEventListener('DOMContentLoaded', function () {
	window.onscroll = function () {
		scrollFunctionNavbar();
	};
});
