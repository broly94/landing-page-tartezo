const navbar = document.getElementById('navbar');
const navbarTitle = document.querySelector('#not-scroll h1');
const navbarSubtitle = document.getElementById('navbar-subtitle');
const publish = document.getElementById('btn-publish');

export default function scrollFunctionNavbar(width) {
	if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
		//* In scroll */
		//* Flexbox */
		navbarSubtitle.style.display = 'none';
		navbarTitle.style.display = 'block';
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
		publish.style.backgroundColor = 'transparent';
		publish.style.color = 'transparent';
		publish.style.outline = '1px solid #000';
		publish.style.borderRadius = '50%';
	} else {
		//* Out scroll */
		navbarTitle.style.display = 'block';
		navbar.style.padding = '';
		navbar.style.backgroundColor = '#212529';
		navbarSubtitle.style.display = 'block';
		navbar.style.flexDirection = 'column';
		navbarTitle.style.color = '#e4b200';
		publish.style.display = 'none';
		publish.style.backgroundColor = '#212529';
		publish.style.color = '#212529';
	}
}
