import React from "react";
//import conatiners
import homeContainer from "../Home/homeContainer";
import CartContainer from "../Cart/CartContainer";

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../../config/storeConfig";

const Navigator = () => (
	<Provider store={store}>
		<Router history={createBrowserHistory()}>
			<Switch>
				<Route exact path="/" component={homeContainer} />
				<Route path="/home" component={homeContainer} />
				<Route path="/cart" component={CartContainer} />
			</Switch>
		</Router>
	</Provider>
);

export default Navigator;
