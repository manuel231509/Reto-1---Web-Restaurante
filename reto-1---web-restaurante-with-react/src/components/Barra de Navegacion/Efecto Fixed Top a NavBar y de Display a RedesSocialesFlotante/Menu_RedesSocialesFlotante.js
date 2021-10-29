import { forwardRef, useEffect, useRef } from "react";

const MenuRedesSocialesFlotante = forwardRef((props, ref) => {
	const State = useRef({
		navBarCurrent: null,
		footerCurrent: null,
	});

	useEffect(() => {
		State.current = {
			navBarCurrent: ref.refMenu.current,
			footerCurrent: ref.refFooter.current,
		};
		eventListenerScroll();
	});

	const changeNavBar = () => {
		const altNavBar = State.current.navBarCurrent.clientHeight;
		let scrollY = window.scrollY;
		if (scrollY >= altNavBar) {
			State.current.navBarCurrent.classList.remove("no-fixed-top");
			State.current.navBarCurrent.classList.toggle("fixed-top", true);
		} else {
			State.current.navBarCurrent.classList.replace(
				"fixed-top",
				"no-fixed-top"
			);
		}
	};

	const changeFooter = () => {
		const footPos = State.current.footerCurrent.getBoundingClientRect().y;

		if (footPos < 590 - 20) {
			State.current.navBarCurrent
				.querySelector("#redes-sociales-flotante")
				.classList.add("d-none");
		} else {
			State.current.navBarCurrent
				.querySelector("#redes-sociales-flotante")
				.classList.remove("d-none");
		}
	};

	const changeNavBarFooter = () => {
		changeNavBar();
		changeFooter();
	};

	const eventListenerScroll = () => {
		window.addEventListener("scroll", changeNavBarFooter);
	};
	return null;
});

export default MenuRedesSocialesFlotante;
