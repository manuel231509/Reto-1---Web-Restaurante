import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "../views/Menu.js";
const routes = [
	/* {
		path: "/",
		component: Home,
	}, */
	{
		path: "/menu",
		component: Menu,
	},
	{
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
	},
];
const router = () => {
	return (
		<>
			<Router>
				<>
					<ul>
						<li>
							<Link to="/tacos">Tacos</Link>
						</li>
						<li>
							<Link to="/menu">Menu</Link>
						</li>
					</ul>

					<Switch>
						{routes.map((route, i) => (
							<RouteWithSubRoutes key={i} {...route} />
						))}
					</Switch>
				</>
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

function Sandwiches() {
	return <h2>Sandwiches</h2>;
}

function Tacos({ routes }) {
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
}

export default router;
