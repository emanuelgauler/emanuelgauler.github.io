const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('nav a');
window.onscroll = (e) => {
	 sections.forEach(section => {
			const top = window.scrollY;
			const offset = section.offsetTop - 60;
			const height = section.offsetHeight;
			const id = section.getAttribute('id');
			if (top >= offset && top < offset + height) {
				 links.forEach(link => {
						link.classList.remove('active');
						document.querySelector(`nav a[href*="${id}"]`)
							 .classList.add('active');
				 });
			}
	 });
};

