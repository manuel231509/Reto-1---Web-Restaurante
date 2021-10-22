/* import { forwardRef } from "react";

const RedesSocialesFlotante = forwardRef((props, ref) => {
	console.log("redes");
	console.log(ref.refMenu);
	const $navBar = document.getElementById("menu");
	console.log($navBar);
	window.addEventListener("scroll", function () {
		 const altNavBar = navBar.clientHeight;
		console.log(altNavBar); 
	});
	return <></>;
});

export default RedesSocialesFlotante; */

const RedesSocialesFlotante = () => {
	(() => {
		"NavBar - Menu";
		console.log("Si esta llamando");
		const $navbar = document.getElementById("menu");
		/* const footer = document.getElementById("footer"); */
		console.log($navbar);

		window.addEventListener("scroll", function () {
			/* const altNavBar = navbar.clientHeight;
			let scrollY = window.scrollY;
			const footPos = footer.getBoundingClientRect().y;
			if (footPos < 590 - 20) {
				document
					.getElementById("redes-sociales-flotante")
					.classList.add("d-none");
			} else {
				document
					.getElementById("redes-sociales-flotante")
					.classList.remove("d-none");
			} */
			/* Nos permite cambiar el NavBar de fixed-top a no-fixed-top segun sea la condicion */
			/* if (scrollY >= altNavBar) {
				navbar.classList.remove("no-fixed-top");
				navbar.classList.toggle("fixed-top", true);
			} else {
				navbar.classList.replace("fixed-top", "no-fixed-top");
			} */
		});
	})();
	return <></>;
};

export default RedesSocialesFlotante;
