import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RestaurantsList from "../pages/RestaurantsList";
import MenusList from "../pages/MenusList";
import ErrorBoundry from "../pages/ErrorBoundry";


const Routing = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={RestaurantsList} />
                <Route path="/restaurant/:name" component={MenusList} />
                <Route exact path="NotFound" component={ErrorBoundry} />
                <Redirect to="NotFound" />
            </Switch>
        </div>
    )
};

export default Routing;