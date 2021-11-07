import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route /* Link */,
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Menu from "../views/Menu";
import Reserva from "../views/Reserva";
import Nosotros from "../views/Nosotros";
import Servicios from "../views/Servicios";
import Carrito from "../views/Carrito";
const routes = [
	{
		path: "/nosotros",
		component: Nosotros,
	},
	{
		path: "/menu",
		component: Menu,
	},
	{
		path: "/servicios",
		component: Servicios,
	},
	{
		path: "/reserva",
		component: Reserva,
	},
	{
		path: "/carrito",
		component: Carrito,
	},
	/*{
		 path: "/tacos",
		component: Tacos,
		routes: [
			{
				path: "/tacos/bus",
				component: Bus,
			},
			{
				path: "/tacos/cart",
				component: Cart,
			},
		],
	},*/
];
const router = () => {
	return (
		<>
			<Router>
				<Layout>
					<Switch>
						{routes.map((route, i) => (
							<RouteWithSubRoutes key={i} {...route} />
						))}
					</Switch>
				</Layout>
			</Router>
		</>
	);
};

const RouteWithSubRoutes = (route) => {
	return (
		<>
			<Route
				path={route.path}
				render={(props) => (
					// pass the sub-routes down to keep nesting
					<route.component {...props} routes={route.routes} />
				)}
			/>
		</>
	);
};

/* function Tacos({ routes }) {
	return (
		<div>
			<h2>Tacos</h2>
			<ul>
				<li>
					<Link to="/tacos/bus">Bus</Link>
				</li>
				<li>
					<Link to="/tacos/cart">Cart</Link>
				</li>
			</ul>

			<Switch>
				{routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}
			</Switch>
		</div>
	);
}

function Bus() {
	return <h3>Bus</h3>;
}

function Cart() {
	return <h3>Cart</h3>;
} */

export default router;
