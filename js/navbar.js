const navbar = document.querySelector('.navbar');
const navbarTitle = document.querySelector('.not-scroll h1');
const navbarSubtitle = document.querySelector('.navbar-subtitle');
const publish = document.querySelector('.btn-publish');
const containerScroll = document.querySelector('.scroll');

export default function scrollFunctionNavbar() {
	if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
		//* In scroll */
		//* NAVBAR */
		containerScroll.style.display = 'block';
		containerScroll.style.paddingLeft = '20px';
		navbar.classList.add('navbar-scroll');
		navbar.classList.remove('navbar-not-scroll');

		//* NAVBAR TITLE */
		navbarTitle.style.fontSize = '3rem';
		navbarTitle.style.color = '#000';
		navbarTitle.classList.add('navbar-scroll-title');
		navbarTitle.classList.remove('navbar-not-scroll-title');

		//* NAVBAR SUBTITLE */
		navbarSubtitle.classList.add('navbar-scroll-subtitle');
		navbarSubtitle.classList.remove('navbar-not-scroll-subtitle');

		//* NAVBAR BUTTON PUBLISH */
		publish.classList.add('navbar-scroll-btn-publish');
		publish.classList.remove('navbar-not-scroll-btn-publish');
	} else {
		//* Out scroll */
		//* NAVBAR */
		navbar.classList.remove('navbar-scroll');
		navbar.classList.add('navbar-not-scroll');

		//* NAVBAR TITLE */
		navbarTitle.style.fontSize = '4rem';
		navbarTitle.style.color = '#e4b200';
		navbarTitle.classList.add('navbar-not-scroll-title');
		navbarTitle.classList.remove('navbar-scroll-title');

		//* NAVBAR SUBTITLE */
		navbarSubtitle.classList.remove('navbar-scroll-subtitle');
		navbarSubtitle.classList.add('navbar-not-scroll-subtitle');

		//* NAVBAR BUTTON PUBLISH */
		publish.classList.remove('navbar-scroll-btn-publish');
		publish.classList.add('navbar-not-scroll-btn-publish');
	}
}
