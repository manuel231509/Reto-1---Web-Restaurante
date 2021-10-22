import React, { forwardRef, useRef } from "react";
import Router from "./router/router";
import NavBar from "./components/Componentes Barra de Navegacion/navBar";
import Footer from "./components/Componentes Pie de Pagina/footer";
import RedesSocialesFlotante from "./js/redes-sociales-flotante.jsx";
/* import src_Menu_RedesFlotante from "./js/redes-sociales-flotante"; */

const MenuTop = (props, ref) => {
	console.log(props);
	return <></>;
};
const App = () => {
	let refMenu = useRef();

	const Prueba = (props) => {
		console.log("Prueba");
		let p = props.refMenu.current;
		console.log(p);
		console.log("props");
		return <>{p}</>;
	};
	return (
		<>
			<NavBar ref={{ menu: refMenu }} />
			<Router />
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, in
				placeat accusamus omnis nesciunt eum temporibus at. Laboriosam
				repellendus quidem consequatur voluptatibus quos mollitia repudiandae
				reprehenderit deleniti perspiciatis, voluptatem, labore temporibus
				tempore dolorum ut? Et pariatur cupiditate aspernatur voluptatem
				voluptatibus labore. Omnis tenetur necessitatibus, tempora
				exercitationem, saepe maxime eligendi beatae quisquam illo doloribus
				similique cupiditate reiciendis tempore, expedita dignissimos dicta
				repellendus quae ducimus cumque. Repellat maiores nulla velit itaque
				reiciendis officia impedit voluptatem labore voluptates reprehenderit
				doloribus, modi quisquam ipsum? Sed porro accusantium veniam numquam non
				quae sit quas. A, facilis! Ea cum ipsam quibusdam similique voluptatibus
				animi atque ipsa ipsum et unde fugit necessitatibus explicabo dolorem,
				voluptate enim inventore quam qui consequuntur odit nesciunt quidem!
				Illo reprehenderit similique tenetur optio ducimus corrupti, minus
				quisquam eaque facilis nostrum aperiam enim nemo mollitia ex quo? Odio
				culpa eligendi totam quae consequatur et velit quod molestiae rem
				pariatur nihil obcaecati nulla beatae natus sapiente iure expedita
				officia, deserunt possimus. Reiciendis laudantium porro odit iste totam
				ut, placeat unde. Nostrum voluptatibus adipisci illum mollitia et enim
				explicabo recusandae rerum, sit quam veniam iste blanditiis incidunt
				similique eum odit non? Quasi, esse! Rem perferendis quia, qui
				dignissimos id voluptatibus ab optio libero earum deserunt?
			</div>
			<Footer />
			<Prueba refMenu={refMenu} />
			{/* <MenuTop menu={refMenu} /> */}
			<button
				onClick={() => {
					console.log(refMenu);
				}}
			>
				Hacer Click
			</button>
			<RedesSocialesFlotante />
			{/* <RedesSocialesFlotante ref={refMenu} /> */}
		</>
	);
};

export default App;
