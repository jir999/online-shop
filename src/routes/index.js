import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RestaurantsList from "../pages/RestaurantsList";
import MenuList from "../pages/MenuList";
import ErrorBoundry from "../pages/ErrorBoundry";
import Basket from "../components/Basket";


const Routing = () => {
    return (
        <div>
            <Basket />
            <Switch>
                <Route exact path="/" component={RestaurantsList} />
                <Route path="/restaurant/:name/:id" component={MenuList} />
                <Route exact path="NotFound" component={ErrorBoundry} />
                <Redirect to="NotFound" />
            </Switch>
        </div>
    )
};

export default Routing;