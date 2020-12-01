import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RestaurantsList from "../pages/RestaurantsList";
import Menu from "../pages/Menu";
import ErrorBoundry from "../pages/ErrorBoundry";


const Routing = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={RestaurantsList} />
                <Route path="/restaurant/:name" component={Menu} />
                <Route exact path="NotFound" component={ErrorBoundry} />
                <Redirect to="NotFound" />
            </Switch>
        </div>
    )
};

export default Routing;