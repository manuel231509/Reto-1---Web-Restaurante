import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Menu from "../views/Menu";
import Reserva from "../views/Reserva";
import Nosotros from "../views/Nosotros";
import Servicios from "../views/Servicios";
import Carrito from "../views/Carrito";
import Inicio from "../views/Inicio";
import Login from "../views/Login";

const routes = [
	{
		path: "/carrito",
		exact: true,
		component: Carrito,
	},
	{
		path: "/menu",
		exact: true,
		component: Menu,
	},
	{
		path: "/reserva",
		exact: true,
		component: Reserva,
	},
	{
		path: "/servicios",
		exact: true,
		component: Servicios,
	},
	{
		path: "/login",
		exact: true,
		component: Login,
	},
	{
		path: "/nosotros",
		exact: true,
		component: Nosotros,
	},
	{
		path: "/inicio",
		exact: true,
		component: Inicio,
	},
	{
		path: "/",
		exact: true,
		component: Inicio,
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
const Router = () => {
	return (
		<>
			<HashRouter>
				<Layout>
					<Switch>
						{routes.map((route, i) => (
							<RouteWithSubRoutes key={i} {...route} />
						))}
					</Switch>
				</Layout>
			</HashRouter>
		</>
	);
};

const RouteWithSubRoutes = (route) => {
	return (
		<>
			<Route
				path={route.path}
				render={(props) => (
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

export default Router;
