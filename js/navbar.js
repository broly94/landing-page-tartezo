const navbar = document.getElementById('navbar');
const navbarTitle = document.querySelector('#not-scroll h1');
const navbarSubtitle = document.getElementById('navbar-subtitle');
const publish = document.getElementById('publish');

export default function scrollFunctionNavbar() {
	if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
		//* In scroll */
		//* Flexbox */
		navbarSubtitle.style.display = 'none';
		navbar.style.backgroundColor = 'transparent';
		navbar.style.display = 'flex';
		navbar.style.flexDirection = 'row';
		navbar.style.justifyContent = 'space-between';
		publish.style.display = 'flex';
		//* Flexbox end */
		navbar.style.paddingLeft = '2rem';
		navbar.style.paddingRight = '2rem';
		navbarTitle.style.color = '#000';
		navbarTitle.style.fontSize = '3rem';
	} else {
		//* Out scroll */
		navbar.style.padding = '';
		navbar.style.backgroundColor = '#212529';
		navbarSubtitle.style.display = 'block';
		navbar.style.flexDirection = 'column';
		navbarTitle.style.color = '#e4b200';
		publish.style.display = 'none';
	}
}
